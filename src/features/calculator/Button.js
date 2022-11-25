import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    clear,
    addValue,
    addOperator,
    replaceOperator,
    evaluate,
    selectLastEvaluated,
    selectCurrentValue,
} from "./calculatorSlice";
import styles from "./Button.module.css";
import { typeOf } from "mathjs";

export default function Button(props) {
    const dispatch = useDispatch();

    const lastEval = useSelector(selectLastEvaluated);
    const value = useSelector(selectCurrentValue);

    const handleClick = (text) => {
        switch (text) {
            case "AC":
                dispatch(clear());
                break;
            case "+":
            case "-":
            case "*":
            case "/":
                if (
                    /[-\+\*\/]/.test(lastEval[lastEval.length - 2]) &&
                    value === ""
                ) {
                    dispatch(replaceOperator(text));
                } else {
                    dispatch(addOperator(text));
                }
                break;
            case "=":
                console.log("evaluating...");
                break;
            case ".":
                console.log("adding a decimal...");
                break;
            default:
                dispatch(addValue(text));
                break;
        }
    };

    return (
        <div
            id={props.btnDetails.id}
            className={styles.button}
            key={props.btnDetails.key}
            style={{
                gridArea: props.btnDetails.gridArea,
                backgroundColor: props.btnDetails.bgColor,
            }}
            onClick={() => handleClick(props.btnDetails.text)}
        >
            {props.btnDetails.text}
        </div>
    );
}
