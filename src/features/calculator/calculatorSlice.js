import { createSlice } from "@reduxjs/toolkit";
import { evaluate as ev } from "mathjs";

const initialState = {
    lastEvaluated: "last evaluated",
    currentExpression: "current expression",
};

export const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        clear: (state) => {
            state.lastEvaluated = "";
            state.currentExpression = "";
        },
        evaluate: (state) => {
            state.lastEvaluated = ev(
                state.lastEvaluated + state.currentExpression
            );
            state.lastEvaluated = state.currentExpression = "";
        },
        addToExpression: (state, action) => {
            state.lastEvaluated +=
                action.payload + " " + state.currentExpression;
            state.currentExpression = "";
        },
        replaceOperator: (state, action) => {
            state.lastEvaluated =
                state.lastEvaluated.slice(0, state.lastEvaluated.length - 1) +
                action.payload;
        },
    },
});

export const { clear, evaluate, addToExpression, replaceOperator } =
    calculatorSlice.actions;

export const selectLastEvaluated = (state) => state.calculator.lastEvaluated;
export const selectCurrentExpression = (state) =>
    state.calculator.currentExpression;

export default calculatorSlice.reducer;
