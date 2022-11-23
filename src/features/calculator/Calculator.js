import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    decrement,
    increment,
    incrementByAmount,
    selectResult,
} from "./calculatorSlice";
import styles from "./Calculator.module.css";
import Display from "./Display";
import Button from "./Button";

export function Calculator() {
    const count = useSelector(selectResult);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState("2");

    const incrementValue = Number(incrementAmount) || 0;

    const buttons = [
        { id: "clear", gridArea: "ac", bgColor: "red", text: "AC" },
        { id: "divide", gridArea: "div", bgColor: "grey", text: "/" },
        { id: "multiply", gridArea: "mul", bgColor: "grey", text: "*" },
        { id: "seven", gridArea: "seven", bgColor: "grey", text: "7" },
        { id: "eight", gridArea: "eight", bgColor: "grey", text: "8" },
        { id: "nine", gridArea: "nine", bgColor: "grey", text: "9" },
        { id: "subtract", gridArea: "sub", bgColor: "grey", text: "-" },
        { id: "four", gridArea: "four", bgColor: "grey", text: "4" },
        { id: "five", gridArea: "five", bgColor: "grey", text: "5" },
        { id: "six", gridArea: "six", bgColor: "grey", text: "6" },
        { id: "add", gridArea: "add", bgColor: "grey", text: "+" },
        { id: "one", gridArea: "one", bgColor: "grey", text: "1" },
        { id: "two", gridArea: "two", bgColor: "grey", text: "2" },
        { id: "three", gridArea: "three", bgColor: "grey", text: "3" },
        { id: "zero", gridArea: "zer", bgColor: "grey", text: "0" },
        { id: "decimal", gridArea: "dot", bgColor: "grey", text: "." },
        { id: "equals", gridArea: "eq", bgColor: "blueviolet", text: "=" },
    ];

    return (
        <div className={styles.CalculatorBody}>
            <div className={styles.displayContainer}>
                <Display />
            </div>
            <div className={styles.buttonContainer}>
                {buttons.map((btn) => (
                    <Button btnDetails={btn} />
                ))}
            </div>
        </div>
    );
}
