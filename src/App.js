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
      <div className="brand">
        <span>MattPDev Weather App</span>
      </div>
    )
  }
}

