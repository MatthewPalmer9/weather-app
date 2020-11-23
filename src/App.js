import React, { Component } from 'react';
import './App.css';
import './index.css';

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      query: ""
    }
  }

  handleChange = e => {
    this.setState({
      query: e.target.value
    })
  }

  getWeather = () => {
    const myKey = "39a9a737b07b4b703e3d1cd1e231eedc";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.query}&appid=${myKey}`)
    .then(resp => resp.json())
    .then(data => this.renderWeather(data))
  }

  renderWeather = data => {
    console.log(data);
    const report = document.querySelector("#report");
    report.innerHTML = `
        <div class="weather-container">
          <span class="location">
            ${data.name}
          </span>
          <hr>
          <div class="highs">
            <span>Highs of: ${Math.round(((data.main.temp_max - 273.15) * 9/5 + 32))}°F</span>
          </div>
          <div class="lows">
            <span>Lows of: ${Math.round(((data.main.temp_min - 273.15) * 9/5 + 32))}°F</span>
          </div>
          <div class="current__temp">
            <span>Current temp: ${Math.round(((data.main.temp - 273.15) * 9/5 + 32))}°F</span>
          </div>
          <div class="feels__like">
            <span>Feels like: ${Math.round(((data.main.feels_like - 273.15) * 9/5 + 32))}°F</span>
          </div>
          <div class="wind__speed">
            <span>Wind speed: ${data.wind.speed} MPH</span>
          </div>
          <div class="clouds">
            <span>Clouds in the Sky: ${data.clouds.all}</span>
          </div>
        </div>
    `;
  }

  render() {
    return (
      <div className="app-container">

        {/* Brand Bar */}
        <div className="brand">
          <span>MattPDev Weather App</span>
        </div>

        {/* Input field */}
        <div className="input-container">
          <label>Type Your Location: </label>
          <input onChange={this.handleChange} type="text" />
          <button onClick={this.getWeather}>SUBMIT</button>
        </div>

        {/* Weather Report */}
        <div id="report">

        </div>
      </div>
    )
  }
}

