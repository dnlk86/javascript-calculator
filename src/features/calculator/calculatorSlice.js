import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expression: "",
    value: "",
};

export const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } =
    calculatorSlice.actions;

export const selectResult = (state) => state.calculator.value;

export default calculatorSlice.reducer;
