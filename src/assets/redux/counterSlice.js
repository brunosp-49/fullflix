import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: "Home",
    value2: {}
}

export const counterSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        goToIndex: (state) => {
            state.value = "Home"
        },
        goToDetails: (state) =>{
            state.value = "Details"
        },
        getMovieDetails: (state, action) => {
            state.value2 = action.payload
        }
    }
})

export const { goToIndex, goToDetails, getMovieDetails } = counterSlice.actions;

export default counterSlice.reducer;