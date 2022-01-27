import styles from "../../../styles/Home.module.scss";
import ReactTooltip from "react-tooltip";
import Image from "next/image";
import OnlineSvg from "../../../assets/svg/online-sign.svg";
import OfflineSvg from "../../../assets/svg/offline-sign.svg";
import React from "react";
import {ChainsMap} from "../../../@types/chain";

const ChainCard: React.FC<ChainCardProps> = ({chain, color, id, status}) => {
    return (<a href="#" className={styles.card} key={id} data-for={`additional-info${id}`} data-tip=''
               id={chain.isConnected ? 'card-online' : 'card-offline'}>
        <ReactTooltip id={`additional-info${id}`} effect='solid' backgroundColor={color}>
            <h4 style={{padding: 0, margin: 0, textDecoration: 'underline'}}>{status}</h4>
            <br/>
            <ul className={styles.list}>
                <li>
                    ss58 Format: {chain.ss58Format}
                </li>
                <li>
                    Token Decimals: {chain.tokenDecimals.join(', ')}
                </li>
                <li>
                    Token Symbol: {chain.tokenSymbol.join(', ')}
                </li>
            </ul>
        </ReactTooltip>
        <h2>
            <Image
                src={chain.icon} alt="icon"
                width={25} height={25}
                className={styles.logo}
            />
            {chain.name}
            <Image
                src={chain.isConnected ? OnlineSvg : OfflineSvg}
                alt="connectionSign"
                className={styles.connectionSign}
            />
        </h2>
    </a>)
}

interface ChainCardProps {
    chain: ChainsMap[string];
    id: string;
    color: string;
    status: string;
}

export default ChainCard;