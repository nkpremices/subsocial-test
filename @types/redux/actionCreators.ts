import { Action } from 'redux';
import { ChainsActionTypes } from "../../store/actions/types/chains.types";
import { ChainsMap } from "../chain";

export interface SetCurrentChainsActionCreatorI
    extends Action<ChainsActionTypes.SET_CURRENT_CHAINS> {
    payload: ChainsMap;
}

export interface SetIsLoadingCurrentChainsActionCreatorI
    extends Action<ChainsActionTypes.SET_IS_LOADING_CURRENT_CHAINS> {
    payload: boolean;
}

export interface SetCurrentErrorMessageActionCreatorI
    extends Action<ChainsActionTypes.SET_CURRENT_ERROR_MESSAGE> {
    payload: string;
}

export type ChainsActions =
    SetCurrentChainsActionCreatorI
    | SetIsLoadingCurrentChainsActionCreatorI
    | SetCurrentErrorMessageActionCreatorI;