import {
  shallow,
  ReactWrapper,
  render,
  mount,
  ShallowWrapper,
  HTMLAttributes,
} from "enzyme";
import React from "react";
import { PlayForm } from "../components/PlayForm";

describe("Elements Render To DOM", () => {
  let mountWrapper: ReactWrapper;
  // Full DOM render
  beforeAll(() => {
    mountWrapper = mount(<PlayForm />);
  });

  afterAll(() => {
    mountWrapper.unmount();
  });

  it("Player 1 Input Exists", () => {
    expect(mountWrapper.exists("#p1Input")).toEqual(true);
  });

  it("Player 2 Input Exists", () => {
    expect(mountWrapper.exists("#p2Input")).toEqual(true);
  });

  it("Submit Button Exists", () => {
    expect(mountWrapper.exists("#submitButton")).toEqual(true);
  });

  it("Result Message Section does not exist on load", () => {
    expect(mountWrapper.exists("#resultMessageSection")).toEqual(
      false,
    );
  });
});

describe("Elements contain their default values", () => {
  let mountWrapper: ReactWrapper;
  // Full DOM render
  beforeAll(() => {
    mountWrapper = mount(<PlayForm />);
  });

  afterAll(() => {
    mountWrapper.unmount();
  });

  it("Player 1 Input text is empty on mount", () => {
    expect(mountWrapper.find("#p1Input").text()).toBeFalsy();
  });

  it("Player 2 Input text is empty on mount", () => {
    expect(mountWrapper.find("#p2Input").text()).toBeFalsy();
  });

  it("Submit Button text is `Play` on mount", () => {
    expect(mountWrapper.find("#submitButton").text()).toBe("Play");
  });
});
//boxes have stuff? maybe they don't...submit

describe("Input elements accept text", () => {
  let shallowWrapper: ShallowWrapper;

  beforeEach(() => {
    shallowWrapper = shallow(<PlayForm />);
  });

  afterEach(() => {
    shallowWrapper.unmount();
  });

  it("Player 1's input value can be changed.", () => {
    const inputID = "#p1Input";
    const stateKey = "p1Throw";
    const event = { target: { name: stateKey, value: "RoCk" } };
    const inputComponent = shallowWrapper.find(inputID);
    expect(inputComponent).toHaveLength(1);
    shallowWrapper.find(inputID).simulate("change", event);
    expect(shallowWrapper.state(stateKey)).toEqual("RoCk");
  });

  it("Player 2's input value can be changed.", () => {
    const inputID = "#p2Input";
    const stateKey = "p2Throw";
    const event = { target: { name: stateKey, value: "PaPeR" } };
    const inputComponent = shallowWrapper.find(inputID);
    expect(inputComponent).toHaveLength(1);
    shallowWrapper.find(inputID).simulate("change", event);
    expect(shallowWrapper.state(stateKey)).toEqual("PaPeR");
  });
});

describe("The submit button processes the request", () => {
  let shallowWrapper: ShallowWrapper;
  let playFormInstance: PlayForm;
  let handleSubmitSpy: jest.SpyInstance;
  let submitId: string;
  let btn: ShallowWrapper<HTMLAttributes>;
  let mockPlay = jest.fn();

  beforeAll(() => {
    shallowWrapper = shallow(<PlayForm play={mockPlay} />);
    playFormInstance = shallowWrapper.instance() as PlayForm;
    submitId = "#submitButton";
    btn = shallowWrapper.find(submitId);
    handleSubmitSpy = jest.spyOn(
      playFormInstance,
      "handleSubmitCall",
    );
  });

  afterAll(() => {
    shallowWrapper.unmount();
    handleSubmitSpy.mockClear();
  });

  it("Results message should be undefined before `handleSubmit` is called", () => {
    expect(shallowWrapper.state("resultMessage")).toBeFalsy();
  });

  it("Submit button should fire the `handleSubmit` function", () => {
    expect(btn.exists()).toBe(true);
    btn.simulate("click");
    expect(mockPlay).toHaveBeenCalled();
  });
});
