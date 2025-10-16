import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: "toggle",
    initialState: {
        value : false
    },
    reducers: {
        flip: (state) =>{
            state.value = !state.value
        }
    }
})

export const {flip} = toggleSlice.actions
export default toggleSlice.reducer