import React from "react";
import { mount, ReactWrapper, shallow } from "enzyme";
import { PlayForm } from "../../components/PlayForm";

describe("PlayForm renders the expected elements", () => {
  let fullMount: ReactWrapper;
  let mockPlay = jest.fn();

  beforeEach(() => {
    fullMount = mount(<PlayForm play={mockPlay} />);
  });

  afterEach(() => {
    fullMount.unmount();
  });

  test("should render a component with id `playform-element`", () => {
    let baseElement = fullMount.find("#playform-element");
    expect(baseElement).toExist();
  });
  test("should render an input for player1 with id `p1Input`", () => {
    let p1InputElement = fullMount.find("#p1Input");
    expect(p1InputElement).toExist();
  });

  test("should render an input for player2 with id `p2Input`", () => {
    let p2InputElement = fullMount.find("#p2Input");
    expect(p2InputElement).toExist();
  });

  test("should render a button with id `submit-button`", () => {
    let submitButton = fullMount.find("#submit-button");
    expect(submitButton).toExist();
  });

  test("should render a results message element", () => {
    let resultsElement = fullMount.find("#results-element");
    expect(resultsElement).toExist();
  });
});

describe("Elements contain their default values", () => {
  let fullMount: ReactWrapper;
  let mockPlay = jest.fn();

  beforeEach(() => {
    fullMount = mount(<PlayForm play={mockPlay} />);
  });

  afterEach(() => {
    fullMount.unmount();
  });
  test("player one input should contain the default value of an empty string", () => {
    let p1InputElement = fullMount.find("#p1Input");
    expect(p1InputElement).toExist();
    expect(p1InputElement.text()).toBeFalsy();
  });

  test("player two input should contain the default value of an empty string", () => {
    let p2InputElement = fullMount.find("#p2Input");
    expect(p2InputElement).toExist();
    expect(p2InputElement.text()).toBeFalsy();
  });
});

describe("Input elements handle change through state", () => {
  let fullMount: ReactWrapper;
  let mockPlay = jest.fn();

  beforeEach(() => {
    fullMount = mount(<PlayForm play={mockPlay} />);
  });

  afterEach(() => {
    fullMount.unmount();
  });

  test("p1Input handles change and updates state", () => {
    let playFormInstance = fullMount.instance() as PlayForm;
    let p1InputElement = fullMount.find("#p1Input");
    jest.spyOn(playFormInstance, "handleInputChange");
    playFormInstance.forceUpdate();
    let p1StateKey = "p1Throw";
    const event = { target: { name: p1StateKey, value: "Paper" } };
    p1InputElement.simulate("change", event);
    expect(playFormInstance.handleInputChange).toHaveBeenCalled();
    expect(fullMount).toHaveState(p1StateKey, "Paper");
  });

  test("p2Input handles change and updates state", () => {
    let playFormInstance = fullMount.instance() as PlayForm;
    let p2InputElement = fullMount.find("#p2Input");
    jest.spyOn(playFormInstance, "handleInputChange");
    playFormInstance.forceUpdate();
    let p2StateKey = "p2Throw";
    const event = { target: { name: p2StateKey, value: "Paper" } };
    p2InputElement.simulate("change", event);
    expect(playFormInstance.handleInputChange).toHaveBeenCalledTimes(1);
    expect(fullMount).toHaveState(p2StateKey, "Paper");
  });
});

describe("Playform recieves valid props", () => {
  let fullMount: ReactWrapper;
  let mockPlay = jest.fn();

  beforeEach(() => {
    fullMount = mount(<PlayForm play={mockPlay} />);
  });

  afterEach(() => {
    fullMount.unmount();
  });

  test("should receive prop `play`", () => {
    expect(fullMount).toHaveProp("play");
  });
});

describe("Submit Button Tests", () => {
  let fullMount: ReactWrapper;
  let mockPlay = jest.fn();

  beforeEach(() => {
    fullMount = mount(<PlayForm play={mockPlay} />);
  });

  afterEach(() => {
    fullMount.unmount();
  });

  test("submit button should fire `handleSubmitCall` which calls the play function", () => {
    let playFormInstance = fullMount.instance() as PlayForm;
    let submitButton = fullMount.find("#submit-button");
    expect(submitButton).toExist();
    jest.spyOn(playFormInstance, "handleSubmitCall");
    playFormInstance.forceUpdate();
    submitButton.simulate("click");
    expect(playFormInstance.handleSubmitCall).toHaveBeenCalled();
    expect(mockPlay).toHaveBeenCalled();
  });

  test("given p1 inputs `Rock` and p2Inputs `Paper` should fire off the respective functions", () => {
    let p1StateKey = "p1Throw";
    let p2StateKey = "p2Throw";
    let playFormInstance = fullMount.instance() as PlayForm;
    let submitButton = fullMount.find("#submit-button");
    let p1InputElement = fullMount.find("#p1Input");
    let p2InputElement = fullMount.find("#p2Input");
    expect(submitButton).toExist();
    expect(p1InputElement).toExist();
    expect(p2InputElement).toExist();
    jest.spyOn(playFormInstance, "handleInputChange");
    jest.spyOn(playFormInstance, "handleSubmitCall");
    playFormInstance.forceUpdate();
    const p1Throw = "Rock";
    const p2Throw = "Paper";
    const p1Event = { target: { name: p1StateKey, value: p1Throw } };
    const p2Event = { target: { name: p2StateKey, value: p2Throw } };
    p1InputElement.simulate("change", p1Event);
    p2InputElement.simulate("change", p2Event);
    expect(playFormInstance.handleInputChange).toHaveBeenCalledTimes(2);
    submitButton.simulate("click");
    expect(playFormInstance.handleSubmitCall).toHaveBeenCalledTimes(1);
    expect(mockPlay).toHaveBeenCalled();
    expect(mockPlay).toHaveBeenCalledWith(p1Throw, p2Throw, playFormInstance);
    expect(fullMount).toHaveState("p1Throw", p1Throw);
    expect(fullMount).toHaveState("p2Throw", p2Throw);

    // expect(playFormInstance.handleSubmitCall).toHaveBeenCalledTimes(1);
  });
});
