import { configureStore } from "@reduxjs/toolkit";
import { slice } from "./slices/slice";

export const store=configureStore({
    reducer:{
        data:slice.reducer
    }
})
export type RootState = ReturnType<typeof store.getState>