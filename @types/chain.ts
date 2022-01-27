export interface Chain {
    ss58Format: number;
    tokenDecimals: number[];
    tokenSymbol: string[];
    icon: string;
    name: string;
    isConnected: boolean;
}

export interface ChainsMap {
    [chainName: string]: Chain;
}