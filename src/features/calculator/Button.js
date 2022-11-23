import React from "react";
import styles from "./Button.module.css";

export default function Button(props) {
    return (
        <div
            className={styles.button}
            style={{ gridArea: props.btnDetails.gridArea }}
        ></div>
    );
}
