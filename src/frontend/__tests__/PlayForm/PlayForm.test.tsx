import React from "react";
import { mount, ReactWrapper, shallow } from "enzyme";
import { PlayForm } from "../../components/PlayForm";

describe("PlayForm renders the expected elements", () => {
  let fullMount: ReactWrapper;

  beforeEach(() => {
    fullMount = mount(<PlayForm />);
  });

  afterEach(() => {
    fullMount.unmount();
  });

  test("should render a component with id `playform-element`", () => {
    let baseElement = fullMount.find("#playform-section");
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

  test("should render an element with id `count-element`", () => {
    let countElement = fullMount.find("#count-element");
    expect(countElement).toExist();
  });
});

describe("Elements contain their default values", () => {
  let fullMount: ReactWrapper;

  beforeEach(() => {
    fullMount = mount(<PlayForm />);
  });

  afterEach(() => {
    fullMount.unmount();
  });
  test("should have a default state of `count:0`", () => {
    expect(fullMount).toHaveState("count", 0);
  });

  test("should render an element with id `count-element` which contains the default state 0", () => {
    let countElement = fullMount.find("#count-element");
    expect(countElement).toExist();
    expect(countElement.text()).toContain("Count:");
    expect(countElement.text()).toBe("Count: 0");
  });
});
