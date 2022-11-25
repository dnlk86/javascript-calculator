import { createSlice } from "@reduxjs/toolkit";
import { evaluate as ev } from "mathjs";

const initialState = {
    lastEvaluated: [""],
    value: "",
};

export const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        clear: (state) => {
            state.lastEvaluated = [""];
            state.value = "";
        },
        addValue: (state, action) => {
            state.value += action.payload;
            state.lastEvaluated[state.lastEvaluated.length - 1] = state.value;
        },
        addOperator: (state, action) => {
            state.lastEvaluated.push(action.payload);
            state.lastEvaluated.push("");
            state.value = "";
        },
        replaceOperator: (state, action) => {
            state.lastEvaluated[state.lastEvaluated.length - 2] =
                action.payload;
        },
        // evaluate: (state) => {
        //     state.lastEvaluated = ev(state.lastEvaluated.concat(state.value));
        //     state.value = 0;
        // },
    },
});

export const { clear, addValue, addOperator, replaceOperator, evaluate } =
    calculatorSlice.actions;

export const selectLastEvaluated = (state) => state.calculator.lastEvaluated;
export const selectCurrentValue = (state) => state.calculator.value;

export default calculatorSlice.reducer;
