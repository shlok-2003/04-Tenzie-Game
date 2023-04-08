import React from "react"
import './Result.css'

export default function Result(props) {    
    const bestRolls = localStorage.getItem("roll") || 0
    
    return (
        <div className="game--result">
            <h1 className="game--title">RESULT</h1>
            <div className="game--time">
                <span>Best Rolls</span>
                <span>
                    {bestRolls}
                </span>
            </div>  
            <div className="game--roll">
                <span>Number of rolls</span>
                <span>{props.rolls}</span>
            </div>
        </div>
    )
}