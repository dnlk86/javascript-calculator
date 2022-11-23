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

export function Calculator() {
    const count = useSelector(selectResult);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState("2");

    const incrementValue = Number(incrementAmount) || 0;

    return (
        <div className={styles.CalculatorBody}>
            <div className={styles.displayContainer}>
                <Display />
            </div>
            <div className={styles.buttonContainer}></div>
        </div>
    );
}
