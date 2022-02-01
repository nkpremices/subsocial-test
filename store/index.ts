import { configureStore } from '@reduxjs/toolkit';
import chainsReducer from './features/chains';

export const store = configureStore({
    reducer: {
        chainsState: chainsReducer,
    },
});

export default store;