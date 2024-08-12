import React, {useState} from "react";
import "./Weather.css";
import Humidity from "./Humidity";
export default function Weather (props) {
    let [temperature, setTemperature] = useState (props.temperature);
    let [unit, setUnit] = useState ("Metric");
      

    function showFahrenhait (event){
        event.preventDefault();
        setUnit ("Imperial-fahrenhait");
        setTemperature ((props.temperature * 9) / 5 + 32);
     }
     function showCelsius (event) {
        event.preventDefault();
        setUnit("Metric-celsius")
        setTemperature (props.temperature);
     }
    if (props.temperature >= 20) {
         return (
        <div className="Temperature">
            <h2> The Temperture in <span className="City"> {props.City}</span> is {temperature} {unit} <a href="/" onClick = {showCelsius} > °C </a>  (warm) <a href="/" onClick={showFahrenhait} > °F </a>
             < Humidity value ={props.humidity}/>%
            </h2>
        </div>
    );
}
    else {
        return (
            <h2> The Temperture in <span className="City"> {props.City}</span> is {temperature} <a href="/" onClick = {showCelsius} > °C </a>  (not so warm) <a href="/" onClick={showFahrenhait} > °F </a>
             < Humidity value ={props.humidity}/>%
            </h2>
        );
    }
   
   
}