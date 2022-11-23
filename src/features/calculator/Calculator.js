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

    return (
        <div className={styles.CalculatorBody}>
            <div className={styles.displayContainer}>
                <Display />
            </div>
            <div className={styles.buttonContainer}>
                <div id={"btnAC"} />
                <Button id="div" btnDetails={{ gridArea: "div" }} />
                <Button id="mul" btnDetails={{ gridArea: "mul" }} />
                <Button id="seven" btnDetails={{ gridArea: "seven" }} />
                <Button id="eight" btnDetails={{ gridArea: "eight" }} />
                <Button id="nine" btnDetails={{ gridArea: "nine" }} />
                <Button id="sub" btnDetails={{ gridArea: "sub" }} />
                <Button id="four" btnDetails={{ gridArea: "four" }} />
                <Button id="five" btnDetails={{ gridArea: "five" }} />
                <Button id="six" btnDetails={{ gridArea: "six" }} />
                <Button id="sum" btnDetails={{ gridArea: "sum" }} />
                <Button id="one" btnDetails={{ gridArea: "one" }} />
                <Button id="two" btnDetails={{ gridArea: "two" }} />
                <Button id="three" btnDetails={{ gridArea: "three" }} />
                <Button id="zer" btnDetails={{ gridArea: "zer" }} />
                <Button id="dot" btnDetails={{ gridArea: "dot" }} />
                <div id="btnEQ" />
            </div>
        </div>
    );
}
