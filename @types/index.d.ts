import {ChainsMap} from "./chain";

declare global {
    interface StoreI {
        chainsState: {
            currentChains: ChainsMap | null;
            errorMessage: string | null;
            isLoadingChains: boolean;
        }
    }
}