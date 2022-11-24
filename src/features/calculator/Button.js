import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    clear,
    evaluate,
    addToExpression,
    replaceOperator,
    selectLastEvaluated,
    selectCurrentExpression,
} from "./calculatorSlice";
import styles from "./Button.module.css";
import { typeOf } from "mathjs";

export default function Button(props) {
    const dispatch = useDispatch();

    const lastEval = useSelector(selectLastEvaluated);
    const currentExp = useSelector(selectCurrentExpression);

    const handleClick = (text) => {
        switch (text) {
            case "AC":
                dispatch(clear());
                break;
            case "+":
            case "-":
            case "*":
            case "/":
                if (lastEval.length !== 0) {
                    if (typeOf(lastEval[lastEval.length - 1]) === "number") {
                        dispatch(addToExpression(text));
                    } else {
                        dispatch(replaceOperator(text));
                    }
                }
            default:
                console.log(text);
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
