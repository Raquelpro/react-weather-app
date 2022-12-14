import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function WeatherForecastDay(props){
  return (
    <div>
    <div className="WeatherForecast-day">{props.data.dt}</div>
<WeatherIcon code={props.data.weather[0].icon} size={36} />
<div className="WeatherForecast-temperatures">
    <span className="WeatherForecast-temperature-max">{props.data.tempe.max}°</span>
    <span className="WeatherForecast-temperature-min">{props.data.temp.min}°</span>
    </div>
    </div>
  );
}