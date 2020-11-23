import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      search: ""
    }
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
          <input type="text" />
          <button> SUBMIT </button>
        </div>

        {/* Weather Report */}
        <div id="report">

        </div>
      </div>
    )
  }
}

