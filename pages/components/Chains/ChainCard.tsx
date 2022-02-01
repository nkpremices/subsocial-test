import styles from "../../../styles/Home.module.scss";
import Image from "next/image";
import React from "react";
import {ChainsMap} from "../../../@types/chain";

const ConnectionStatusComponent = ({ color }: { color: string; }) => {
    return (<svg
        style={{ marginTop: '7px' }}
        width="12" height="12"
        viewBox="0 0 12 12"
        fill="none" xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_3303_8161)">
            <circle cx="6" cy="6" r="6" fill={color} />
        </g>
        <defs>
            <clipPath id="clip0_3303_8161">
                <rect width="12" height="12" fill="white"/>
            </clipPath>
        </defs>
    </svg>)
};

const ChainCard: React.FC<ChainCardProps> = ({chain}) => {
    return (<a href="#" className={styles.card}>
        <h2>
            <Image
                src={chain?.icon} alt="icon"
                width={25} height={25}
                className={styles.logo}
                loader={() => chain?.icon}
            />
            <span>{chain?.name}</span>
            {chain && <ConnectionStatusComponent color={chain.isConnected ? '#2EC28B' : '#FF0000'} />}
        </h2>
    </a>)
}

interface ChainCardProps {
    chain: ChainsMap[string];
}

export default ChainCard;