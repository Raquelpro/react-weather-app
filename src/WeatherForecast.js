import React, {useState, useEffect} from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
      setLoaded(false);
    }, [props.coordinates]);

function handleResponse(response) {
   setForecast(response.data.daily); 
   setLoaded(true);
}

function load() {
   let key = "cc0b84ae3c1b3dd45tb97od7d6ff24e5";
   let longitude = props.coordinates.lon;
   let latitude = props.coordinates.lat;
   let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${key}&units=metric`;

   axios.get(apiUrl).then(handleResponse);
}

  if (loaded) {
 return (
   <div className="WeatherForecast">
     <div className="row">
      {forecast.map(function (dailyForecast, index) {
      if (index < 5) {
   return (
<div className="col" key={index}>
<WeatherForecastDay data={dailyForecast}/>
</div>
);
} else {
   return null;
}
   })}
</div>
   </div>
 );

   
 } else {
    load();

    return null;
  }  
}