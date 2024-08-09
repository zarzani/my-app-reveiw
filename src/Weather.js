import React from "react";
export default function Weather (props) {
    return (
        <div className="Temperature">
            <h2> The Temperture in {props.City} is {props.value} C </h2>
        </div>
    )
}