import "./App.css";
import React, { Component } from "react";
import { PlayForm } from "../PlayForm";
import { play } from "../../../backend/playRPS";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PlayForm play={play} />
      </div>
    );
  }
}

export default App;
