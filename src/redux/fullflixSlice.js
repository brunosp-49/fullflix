import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movie: {},
}

export const fullFlixSlice = createSlice({
    name: "fullflix",
    initialState,
    reducers: {
        getMovieInfo: (state, action) => {
            state.movie = action.payload
        }
    }
})

export const { getMovieInfo } = fullFlixSlice.actions;

export default fullFlixSlice.reducer;
