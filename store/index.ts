import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import appReducer from './reducers';
import initialState from './initialState';

const store = createStore(appReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;