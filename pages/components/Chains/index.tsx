import styles from "../../../styles/Home.module.scss";
import ClipLoader from "react-spinners/ClipLoader";
import React from "react";
import {ChainsMap} from "../../../@types/chain";
import ChainCard from "./ChainCard";

const Chains: React.FC<ChainsProps> = ({ chains, isLoadingChains}) => {

    return (<div className={styles.grid}>
        {!isLoadingChains && chains && Object.values(chains).length !== 0 && Object.values(chains).map((chain) => {
            const id = Math.random().toString();
            const color = chain.isConnected ? '#19d42d' : '#ff0000';
            const status = chain.isConnected ? 'Connected' : 'Disconnected';

            return <ChainCard chain={chain} key={id} color={color} status={status} id={id} />
        })}
        {isLoadingChains && <div>
            <ClipLoader color="blue" loading={isLoadingChains} size={100} />
        </div>}
    </div>)
}

export interface ChainsProps {
    chains: ChainsMap | null;
    isLoadingChains: boolean;
}

export default Chains;