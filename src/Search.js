import React, {useState} from "react";
import "./Search.css";

export default function Search (){
    let [city, setCity] = useState (" ");
    function handleSubmite (event) {
        event.preventDefault ( );
        alert (`Search for ${city}`);
    }
    function updateCity(event) {
        setCity(event.target.value);
    }
    return (
    <p> 
        <form onSubmit={handleSubmite}>
            <input type="Search" onChange={updateCity} />
            <input type="Submit"   value = "search" />
            
        </form>
    </p>

    );
}