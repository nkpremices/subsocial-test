import initialState from "../initialState";
import {Reducer} from "react";
import {
    ChainsActions,
    SetCurrentChainsActionCreatorI,
    SetCurrentErrorMessageActionCreatorI, SetIsLoadingCurrentChainsActionCreatorI
} from "../../@types/redux/actionCreators";
import {ChainsActionTypes} from "../actions/types/chains.types";

export const chainsReducer: Reducer<StoreI["chainsState"], ChainsActions> = (
    state = initialState.chainsState,
    action,
) => {
    switch (action.type) {

        case ChainsActionTypes.SET_CURRENT_CHAINS:
            return {
                ...state,
                currentChains: (action as SetCurrentChainsActionCreatorI).payload,
                isLoadingChains: false,
            };

        case ChainsActionTypes.SET_CURRENT_ERROR_MESSAGE:
            return {
                ...state,
                currentErrorMessage: (action as SetCurrentErrorMessageActionCreatorI).payload,
            };

        case ChainsActionTypes.SET_IS_LOADING_CURRENT_CHAINS:
            return {
                ...state,
                isLoadingChains: (action as SetIsLoadingCurrentChainsActionCreatorI).payload,
            };

        default:
            return state;
    }
}