import { createSlice } from "@reduxjs/toolkit";
import { evaluate as ev } from "mathjs";

const initialState = {
    lastEvaluated: [0],
    currentExpression: [0],
};

export const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        clear: (state) => {
            state.lastEvaluated = [0];
            state.currentExpression = [0];
        },
        evaluate: (state) => {
            state.lastEvaluated = ev(
                state.lastEvaluated.concat(state.currentExpression)
            );
            state.currentExpression = [];
        },
        addToExpression: (state, action) => {
            state.lastEvaluated.push(action.payload);
            state.currentExpression = [];
        },
        replaceOperator: (state, action) => {
            state.lastEvaluated[state.lastEvaluated.length - 1] =
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
