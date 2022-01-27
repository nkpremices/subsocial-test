import { combineReducers } from 'redux';
import {chainsReducer} from "./chains.reducer";

const appReducer = combineReducers({
    chainsState: chainsReducer,
});

export default appReducer;