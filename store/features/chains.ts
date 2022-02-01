import { createSlice } from '@reduxjs/toolkit'
import initialState from "../initialState";
import {getChainsThunk} from "../../services/chains.api";

const chainsSlice = createSlice({
    name: 'chainsState',
    initialState: initialState.chainsState,
    reducers: {
        //
    },
    extraReducers: (builder) => {
        builder.addCase(getChainsThunk.fulfilled, (state: StoreI['chainsState'], action) => {
            state.currentChains = action.payload
            state.isLoadingChains = false;
            state.errorMessage = null;
        });

        builder.addCase(getChainsThunk.rejected, (state: StoreI['chainsState']) => {
            state.errorMessage = 'Something went wrong while loading chains';
            state.isLoadingChains = false;
        });

        builder.addCase(getChainsThunk.pending, (state: StoreI['chainsState']) => {
            state.isLoadingChains = true;
        });
    },
});

export default chainsSlice.reducer
