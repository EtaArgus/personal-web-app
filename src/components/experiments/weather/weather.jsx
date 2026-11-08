import axios from "axios";
import { useState } from "react";
import "./weather.css";

const Weather = () => {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("");
  const [hasError, setHasError] = useState(false);

  const searchLocation = (e) => {
    e.preventDefault();
    const query = location.trim();
    if (!query) return;

    setHasError(false);
    axios
      .get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          q: query,
          units: "metric",
          appid: process.env.REACT_APP_OPENWEATHER_API_KEY,
        },
      })
      .then((res) => {
        setData(res.data);
        setLocation("");
      })
      .catch(() => {
        setData(null);
        setHasError(true);
      });
  };

  return (
    <div className="page">
      <header className="page-header weather-header">
        <p className="eyebrow">Experiments</p>
        <h1 className="page-title">Weather</h1>
      </header>

      <div className="weather">
        <form className="weather-form" onSubmit={searchLocation}>
          <label className="meta" htmlFor="weather-location">
            City
          </label>
          <div className="weather-fields">
            <input
              id="weather-location"
              className="weather-input"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Santiago"
              type="text"
            />
            <button type="submit" className="btn btn--primary">
              Search
            </button>
          </div>
        </form>

        {hasError && (
          <p className="weather-error" role="alert">
            We couldn't get the weather for that city. Check the spelling and
            try again.
          </p>
        )}

        {data && (
          <section className="weather-result" aria-live="polite">
            <p className="meta">{data.weather[0].main}</p>
            <h2 className="weather-city">{data.name}</h2>
            <p className="weather-temp">{data.main.temp}°C</p>
            <dl className="weather-stats">
              <div>
                <dt className="meta">Feels like</dt>
                <dd>{data.main.feels_like}°C</dd>
              </div>
              <div>
                <dt className="meta">Humidity</dt>
                <dd>{data.main.humidity}%</dd>
              </div>
              <div>
                <dt className="meta">Wind speed</dt>
                <dd>{data.wind.speed} m/s</dd>
              </div>
            </dl>
          </section>
        )}
      </div>
    </div>
  );
};

export default Weather;
