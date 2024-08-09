import './App.css';
import { useState } from 'react';

const api = {
  key: "ca5f86faafb0e0d028467431df5e3a2d",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchfunc = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setWeather(result);
      });

/*     fetch('https://gist.githubusercontent.com/pratikbutani/20ded7151103bb30737e2ab1b336eb02/raw/be1391e25487ded4179b5f1c8eedb81b01226216/country-flag.json')
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
    }) */
  }

  return (
    <div className="App">
      <div className='weather-container'>
        <header className="App-header">
          <h1>Weather App</h1>
          <div className="search-box">
            <input
              type='text'
              placeholder='Enter city name...'
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
            <button onClick={searchfunc} className="search-button">Search</button>
          </div>

          {typeof weather.main !== "undefined" ? (
            <div className="weather-info">
              <p className="city-name">{weather.name}</p>
              <p className="temperature">{Math.round(weather.main.temp)}°C</p>
              <p className="weather-condition">{weather.weather[0].main}</p>
              <p className="weather-description">{weather.weather[0].description}</p>
              <img
                src={`https://flagcdn.com/256x192/${weather.sys.country.toLowerCase()}.png`}
                alt='Flag Icon'
                className="weather-icon"
              />
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt='Weather Icon'
                className="weather-icon"
              />
            </div>
          ) : (
            <p className="no-data">No data available</p>
          )}
        </header>
      </div>
    </div>
  );
}

export default App;