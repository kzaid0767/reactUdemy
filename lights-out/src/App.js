import React, { Component } from "react";
import Board from "./Board";
import "./App.css";
import lightout from './lightstoOut.jpg'


/** Simple app that just shows the LightsOut game. */

class App extends Component {
  render() {
    return (
      <div className='App'>
        <img src={lightout} alt='turn lights out to win' />
        <Board />
      </div>
    );
  }
}

export default App;
