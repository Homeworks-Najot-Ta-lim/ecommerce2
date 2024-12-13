import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./productSlice";

export const store = configureStore({
    reducer: {
        cart : cartSlice.reducer
    }
})