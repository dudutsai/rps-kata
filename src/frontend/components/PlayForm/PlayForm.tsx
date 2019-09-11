import React, { Component } from "react";
import { IPlayTheGame } from "../../../backend/playRPS";
interface IPlayFormProps {
  play?: any;
}

interface IPlayFormState {
  p1Throw?: string;
  p2Throw?: string;
  results?: string;
}

export class PlayForm extends Component<IPlayFormProps, IPlayFormState> {
  constructor(props: IPlayFormProps) {
    super(props);
    this.state = {
      p1Throw: "",
      p2Throw: "",
      results: "",
    };
  }

  // Should fire off the play function
  handleSubmitCall = () => {
    const { p1Throw, p2Throw } = this.state;
    this.props.play(p1Throw, p2Throw, this);
    // this.setState({ results: res });
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  p2Wins() {
    this.setState({ results: "Player 2 Wins!" });
  }
  p1Wins() {
    this.setState({ results: "Player 1 Wins!" });
  }

  drawRound() {
    this.setState({ results: "Draw!" });
  }

  invalidGameThing() {
    this.setState({ results: "Invalid" });
  }

  // Dependency invvvvverrrssionnnn

  render() {
    return (
      <div id="playform-element">
        <div>PlayForm Placeholder</div>
        <input
          id="p1Input"
          name="p1Throw"
          onChange={this.handleInputChange}
          value={this.state.p1Throw}
        />
        <input
          id="p2Input"
          name="p2Throw"
          onChange={this.handleInputChange}
          value={this.state.p2Throw}
        />
        <br />
        <button id="submit-button" onClick={this.handleSubmitCall}>
          Click Me
        </button>
        <br />
        <div id="results-element">{this.state.results}</div>
      </div>
    );
  }
}
