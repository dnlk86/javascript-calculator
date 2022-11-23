import React from "react";
import styles from "./Button.module.css";

export default function Button(props) {
    return (
        <div
            id={props.btnDetails.id}
            className={styles.button}
            style={{
                gridArea: props.btnDetails.gridArea,
                backgroundColor: props.btnDetails.bgColor,
            }}
        >
            {props.btnDetails.text}
        </div>
    );
}
