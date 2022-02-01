import { createAsyncThunk } from '@reduxjs/toolkit'
import server from "./axios.service";
import {ChainsMap} from "../@types/chain";

export enum ChainsActionTypes {
    SET_CURRENT_CHAINS = 'Chains/SET_CURRENT_CHAINS',
}

const getIconUrl = (iconName: string) => `https://sub.id/images/${iconName}`;

export const getChainsThunk = createAsyncThunk(
    ChainsActionTypes.SET_CURRENT_CHAINS,
    async () => {
        const { data: chains } = await server.get<ChainsMap>('/chains/properties');

        if(!chains) {
            throw new Error('Chains not found');
        }

        await Promise.all(Object.values(chains).map(async chain => {
            const { data: isConnected } = await server.get<boolean>(`/check/${chain.name.toLowerCase()}`);
            chain.isConnected = isConnected;
            chain.icon = getIconUrl(chain.icon);
        }));

        const newChains: ChainsMap = {};

        Object.values(chains).forEach(chain => {
            if(chain.tokenSymbol && chain.tokenSymbol.length > 0) {
                newChains[chain.name] = chain;
            }
        });

        return newChains;
    }
);