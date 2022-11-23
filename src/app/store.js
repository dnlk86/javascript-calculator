import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/calculator/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
