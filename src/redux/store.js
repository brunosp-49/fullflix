import { configureStore } from "@reduxjs/toolkit";
import fullFlixSlice from "./fullflixSlice";


export const store = configureStore({
    reducer: {
        fullflix:  fullFlixSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})