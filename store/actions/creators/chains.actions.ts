import { ChainsActionTypes } from "../types/chains.types";
import { Dispatch } from "react";
import { ChainsActions, SetIsLoadingCurrentChainsActionCreatorI } from "../../../@types/redux/actionCreators";
import server from "../../../services/axios.service";
import {ChainsMap} from "../../../@types/chain";

export const setIsLoadingChains = (isLoadingChains: boolean) => ({
  type: ChainsActionTypes.SET_IS_LOADING_CURRENT_CHAINS,
  payload: isLoadingChains,
});

const getIconUrl = (iconName: string) => `https://sub.id/images/${iconName}`;

export const getChains = () => async (dispatch: Dispatch<ChainsActions>) => {
  try {
    dispatch(setIsLoadingChains(true) as SetIsLoadingCurrentChainsActionCreatorI);

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

    return dispatch({
      type: ChainsActionTypes.SET_CURRENT_CHAINS,
      payload: newChains,
    })

  } catch (e) {
    return dispatch({
      type: ChainsActionTypes.SET_CURRENT_ERROR_MESSAGE,
      payload: 'Something went wrong while loading chains',
    })
  }
};