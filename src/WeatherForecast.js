import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

function handleResponse(response) {
   setForecast(response.data.daily); 
   setLoaded(true);
}

  if (loaded) {
    console.log(forecast);
 return (
        <div className="WeatherForecast">
<div className="row">
<div className="col">
<div className="WeatherForecast-day">Thu</div>
<WeatherIcon code="clear-sky-night" size={36} />
<div className="WeatherForecast-temperatures">
    <span className="WeatherForecast-temperature-max">{forecast[0].tempe.max}°</span>
    <span className="WeatherForecast-temperature-min">{forecast[0].temp.min}°</span>
    </div>
</div>
</div>
        </div>
    );

   
 } else {
    let key = "cc0b84ae3c1b3dd45tb97od7d6ff24e5";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${key}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }  
}