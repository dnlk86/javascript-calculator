import React from "react";
import { Calculator } from "./features/calculator/Calculator";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Calculator />
            <div id="signatureContainer">
                <a
                    href="https://github.com/dnlk86/javascript-calculator"
                    target={"_blank"}
                >
                    dnlk86
                </a>
            </div>
        </div>
    );
}

export default App;
