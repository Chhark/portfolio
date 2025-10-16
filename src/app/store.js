import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from '../Components/BtmBar/toggleSlice'

export const store = configureStore({
    reducer: {
        toggle: toggleReducer
    }
})