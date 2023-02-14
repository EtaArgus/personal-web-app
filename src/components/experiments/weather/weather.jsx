import axios from "axios";
import React, { useState } from "react";
import "../experiments.css";
import ExperimentsMenu from "../experimentsMenu/experimentsMenu";
import "./weather.css";

const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=
                ${location}
                &units=metric
                &appid=3b8a5e7dcb25f21e5850c854f5548f53`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="experiments section__padding" id="experiments-weather">
      <div className="experiments-menu">
        <ExperimentsMenu />
      </div>

      <div className="experiments-content">
        <div className="weather-content gradient__bg">
          <div className="weather-search">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyPress={searchLocation}
              placeholder="Enter Location..."
              type="text"
            />
          </div>

          <div className="weather-top">
            <div className="weather-top-location">
              <p>{data.name}</p>
            </div>
            <div className="weather-top-temp">
              {data.main ? <h1>{data.main.temp}°F</h1> : null}
            </div>
            <div className="weather-top-description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>

          {data.name !== undefined && (
            <div className="weather-bottom">
              <div className="weather-bottom-feels">
                {data.main ? (
                  <p className="bold">{data.main.feels_like}°F</p>
                ) : null}
                <p>Feels Like</p>
              </div>
              <div className="weather-bottom-humidity">
                {data.main ? (
                  <p className="bold">{data.main.humidity}%</p>
                ) : null}
                <p>Humidiy</p>
              </div>
              <div className="weather-bottom-wind">
                {data.wind ? (
                  <p className="bold">{data.wind.speed} KPH</p>
                ) : null}
                <p>Wind Speed</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
