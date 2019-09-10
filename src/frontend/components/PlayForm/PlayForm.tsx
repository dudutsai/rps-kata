import React, { Component } from "react";

interface IPlayFormState {
  count: number;
}

export class PlayForm extends Component<any, IPlayFormState> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleDecrementClick = () => {
    this.setState({ count: this.state.count - 1 });
  };
  handleIncrementClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    const { count } = this.state;
    return (
      <div id="playform-section">
        <div>PlayForm Placeholder</div>
        <input id="p1Input" />
        <input id="p2Input" />
        <div id="count-element">Count: {count}</div>
        <button onClick={this.handleIncrementClick}>+</button>
        <button onClick={this.handleDecrementClick}>-</button>
      </div>
    );
  }
}
