import styles from "../../../styles/Home.module.scss";
import ReactTooltip from "react-tooltip";
import Image from "next/image";
import React from "react";
import {ChainsMap} from "../../../@types/chain";

const OnlineSvgComponent = () => (<svg style={{ marginTop: '7px' }} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_3303_8161)">
            <circle cx="6" cy="6" r="6" fill="#2EC28B"/>
        </g>
        <defs>
            <clipPath id="clip0_3303_8161">
                <rect width="12" height="12" fill="white"/>
            </clipPath>
        </defs>
    </svg>);

const OfflineSvgComponent = () => (<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_3433_5800)">
        <circle cx="6" cy="6" r="6" fill="#FF0000"/>
    </g>
    <defs>
        <clipPath id="clip0_3433_5800">
            <rect width="12" height="12" fill="white"/>
        </clipPath>
    </defs>
</svg>);

const ChainCard: React.FC<ChainCardProps> = ({chain, color, id, status}) => {
    return (<a href="#" className={styles.card} key={id} data-for={`additional-info${id}`} data-tip=''
               id={chain && chain.isConnected ? 'card-online' : 'card-offline'}>
        <ReactTooltip id={`additional-info${id}`} effect='solid' backgroundColor={color}>
            <h4 style={{padding: 0, margin: 0, textDecoration: 'underline'}}>{status}</h4>
            <br/>
            <ul className={styles.list}>
                <li>
                    ss58 Format: {chain?.ss58Format}
                </li>
                <li>
                    Token Decimals: {chain?.tokenDecimals.join(', ')}
                </li>
                <li>
                    Token Symbol: {chain?.tokenSymbol.join(', ')}
                </li>
            </ul>
        </ReactTooltip>
        <h2>
            <Image
                src={chain?.icon} alt="icon"
                width={25} height={25}
                className={styles.logo}
                loader={() => chain?.icon}
            />
            {chain?.name}
            {chain && chain.isConnected ? <OnlineSvgComponent/> : <OfflineSvgComponent />}
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