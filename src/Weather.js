import React from "react";
import "./Weather.css";
import Humidity from "./Humidity";
export default function Weather (props) {
    function showFahrenhait (event){
        event.preventDefault();
        let temperature = (props.temperature * 9) / 5 + 32;
    alert (`The temperature in fahrenhait is ${temperature} °F`);
    }
    if (props.temperature >= 20) {
         return (
        <div className="Temperature">
            <h2> The Temperture in <span className="City"> {props.City}</span> is {props.temperature} °C  (warm) /<a href="/" onClick={showFahrenhait} > °F </a>
             < Humidity value ={props.humidity}/>%
            </h2>
        </div>
    );}
    else {
        return (
            <h2> The Temperture in <span className="City"> {props.City}</span> is {props.temperature} °C  (not so warm) /<a href="/" onClick={showFahrenhait} > °F </a>
             < Humidity value ={props.humidity}/>%
            </h2>
        );
    }
   
   
}