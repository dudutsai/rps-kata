import "./App.css";
import React, { Component } from "react";
import { PlayForm } from "../PlayForm";
import { playTheGame } from "../../../backend/playRPS";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PlayForm play={playTheGame} />
      </div>
    );
  }
}

export default App;
