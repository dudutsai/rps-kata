import "./App.css";
import React from "react";
import { Messages } from "../../../shared/constants";

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">{Messages.SplashMessage}</header>
  </div>
);

export default App;
