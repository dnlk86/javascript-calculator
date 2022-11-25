import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lastEvaluated: [""],
    value: "",
};

const math = require("mathjs");

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
        addDecimal: (state) => {
            if (state.value === "") {
                state.value += "0.";
            } else {
                state.value += ".";
            }
            state.lastEvaluated[state.lastEvaluated.length - 1] = state.value;
        },
        evaluate: (state) => {
            state.lastEvaluated = [math.evaluate(state.lastEvaluated.join(""))];
            state.value = "";
        },
    },
});

export const {
    clear,
    addValue,
    addOperator,
    replaceOperator,
    addDecimal,
    evaluate,
} = calculatorSlice.actions;

export const selectLastEvaluated = (state) => state.calculator.lastEvaluated;
export const selectCurrentValue = (state) => state.calculator.value;

export default calculatorSlice.reducer;
