import React from "react";
import styles from "./Calculator.module.css";
import Display from "./Display";
import Button from "./Button";

export function Calculator() {
    const buttons = [
        {
            id: "clear",
            key: "clear",
            gridArea: "ac",
            bgColor: "red",
            text: "AC",
        },
        {
            id: "divide",
            key: "divide",
            gridArea: "div",
            bgColor: "grey",
            text: "/",
        },
        {
            id: "multiply",
            key: "multiply",
            gridArea: "mul",
            bgColor: "grey",
            text: "*",
        },
        {
            id: "seven",
            key: "seven",
            gridArea: "seven",
            bgColor: "grey",
            text: "7",
        },
        {
            id: "eight",
            key: "eight",
            gridArea: "eight",
            bgColor: "grey",
            text: "8",
        },
        {
            id: "nine",
            key: "nine",
            gridArea: "nine",
            bgColor: "grey",
            text: "9",
        },
        {
            id: "subtract",
            key: "subtract",
            gridArea: "sub",
            bgColor: "grey",
            text: "-",
        },
        {
            id: "four",
            key: "four",
            gridArea: "four",
            bgColor: "grey",
            text: "4",
        },
        {
            id: "five",
            key: "five",
            gridArea: "five",
            bgColor: "grey",
            text: "5",
        },
        { id: "six", key: "six", gridArea: "six", bgColor: "grey", text: "6" },
        { id: "add", key: "add", gridArea: "add", bgColor: "grey", text: "+" },
        { id: "one", key: "one", gridArea: "one", bgColor: "grey", text: "1" },
        { id: "two", key: "two", gridArea: "two", bgColor: "grey", text: "2" },
        {
            id: "three",
            key: "three",
            gridArea: "three",
            bgColor: "grey",
            text: "3",
        },
        {
            id: "zero",
            key: "zero",
            gridArea: "zer",
            bgColor: "grey",
            text: "0",
        },
        {
            id: "decimal",
            key: "decimal",
            gridArea: "dot",
            bgColor: "grey",
            text: ".",
        },
        {
            id: "equals",
            key: "equals",
            gridArea: "eq",
            bgColor: "blueviolet",
            text: "=",
        },
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
