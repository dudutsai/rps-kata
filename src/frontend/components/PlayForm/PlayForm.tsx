import React, { Component } from "react";

export interface IPlayFormProps {
  play?: any;
}
export interface IPlayFormState {
  resultMessage?: string;
  playMessage?: string;
  errorMessage?: string;
  p1Throw?: string;
  p2Throw?: string;
}

export class PlayForm extends Component<
  IPlayFormProps,
  IPlayFormState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      playMessage: "Press Play When Ready!",
      resultMessage: "",
      errorMessage: "",
      p1Throw: "",
      p2Throw: "",
    };
  }

  handleSubmitCall = () => {
    const { p1Throw, p2Throw } = this.state;
    this.props.play(p1Throw, p2Throw, this);
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h1>Rock Paper Scissors!</h1>
        <div id="inputSection">
          <div id="p1InputSection">
            <span>Player 1: </span>
            <input
              id="p1Input"
              name="p1Throw"
              onChange={this.handleInputChange}
              value={this.state.p1Throw}
              placeholder="Rock? Paper? Scissors?"
            />
          </div>
          <br />
          <div id="p2InputSection">
            <span>Player 2: </span>
            <input
              id="p2Input"
              name="p2Throw"
              onChange={this.handleInputChange}
              value={this.state.p2Throw}
              placeholder="Rock? Paper? Scissors?"
            />
          </div>
        </div>
        <br />
        {this.state.errorMessage && (
          <div>{this.state.errorMessage}</div>
        )}
        <br />
        <div>
          <button id="submitButton" onClick={this.handleSubmitCall}>
            Play
          </button>
        </div>
        <br />
        {this.state.resultMessage && (
          <div id="resultMessageSection">
            <div>Result {this.state.resultMessage}</div>
          </div>
        )}
      </div>
    );
  }
}
