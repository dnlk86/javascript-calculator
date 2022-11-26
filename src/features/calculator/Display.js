import React from "react";
import styles from "./Display.module.css";
import { useSelector } from "react-redux";
import { selectCurrentValue, selectLastEvaluated } from "./calculatorSlice";

export default function Display() {
    const lastEval = useSelector(selectLastEvaluated);
    const value = useSelector(selectCurrentValue);

    return (
        <div className={styles.display}>
            <div>{lastEval}</div>
            <div
                id="display"
                style={{
                    fontSize: "1.3rem",
                    color: "var(--calculator-border)",
                }}
            >
                {value}
            </div>
        </div>
    );
}
