import React from "react";
import './Instruction.css'

export default function Instruction() {
    return (
        <div className="main--text-container">
            <div className="main--text-instruction">
                <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            </div>
        </div>
    )
}