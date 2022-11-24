import React from "react";
import styles from "./Display.module.css";
import { useSelector } from "react-redux";
import {
    selectCurrentExpression,
    selectLastEvaluated,
} from "./calculatorSlice";

export default function Display() {
    const lastEval = useSelector(selectLastEvaluated);
    const currentExp = useSelector(selectCurrentExpression);

    return (
        <div id="display" className={styles.display}>
            <p className={styles.lastEvaluated}>{lastEval}</p>
            <p className={styles.value}>{currentExp}</p>
        </div>
    );
}
