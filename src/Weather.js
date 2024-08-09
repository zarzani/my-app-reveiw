import React from "react";
import "./Weather.css";
import Humidity from "./Humidity";
export default function Weather (props) {
    return (
        <div className="Temperature">
            <h2> The Temperture in <span className="City"> {props.City}</span> is {props.value} °C
            < Humidity value ={props.humidity}/>%
            </h2>
        </div>
    );
}