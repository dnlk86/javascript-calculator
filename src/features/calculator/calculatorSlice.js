import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lastEvaluated: ["0"],
    value: "0",
};

const math = require("mathjs");

export const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        clear: (state) => {
            state.lastEvaluated = ["0"];
            state.value = "0";
        },
        addValue: (state, action) => {
            if (state.value === "0") {
                state.value = action.payload;
            } else {
                state.value += action.payload;
            }
            state.lastEvaluated[state.lastEvaluated.length - 1] = state.value;
        },
        addOperator: (state, action) => {
            state.lastEvaluated.push(action.payload);
            state.lastEvaluated.push("");
            state.value = "";
        },
        replaceOperator: (state, action) => {
            while (
                /(^\s*$|[-\+\*\/])/.test(
                    state.lastEvaluated[state.lastEvaluated.length - 1]
                )
            ) {
                state.lastEvaluated.pop();
            }
            state.lastEvaluated.push(action.payload);
            state.lastEvaluated.push("");
            state.value = "";
        },
        addDecimal: (state) => {
            if (
                !/[\.]/.test(
                    state.lastEvaluated[state.lastEvaluated.length - 1]
                )
            ) {
                if (state.value === "") {
                    state.value += "0.";
                } else {
                    state.value += ".";
                }
                state.lastEvaluated[state.lastEvaluated.length - 1] =
                    state.value;
            }
        },
        evaluate: (state) => {
            state.value = String(math.evaluate(state.lastEvaluated.join("")));
            state.lastEvaluated = [state.value];
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
