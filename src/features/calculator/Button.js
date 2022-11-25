import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    clear,
    addValue,
    addOperator,
    replaceOperator,
    addDecimal,
    evaluate,
    selectLastEvaluated,
    selectCurrentValue,
} from "./calculatorSlice";
import styles from "./Button.module.css";

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
                dispatch(evaluate());
                break;
            case ".":
                dispatch(addDecimal());
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
