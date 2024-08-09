import React from "react";
import "./Weather.css"
export default function Weather (props) {
    return (
        <div className="Temperature">
            <h2> The Temperture in <span className="City"> {props.City}</span>  is {props.value} °C
            </h2>
        </div>
    )
}