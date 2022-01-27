import styles from "../../../styles/Home.module.scss";
import Image from "next/image";
import Spinner from "../../../assets/img/spinner.gif";
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
            <Image src={Spinner} alt="spinner" width={50} height={50}/>
        </div>}
    </div>)
}

export interface ChainsProps {
    chains: ChainsMap | null;
    isLoadingChains: boolean;
}

export default Chains;