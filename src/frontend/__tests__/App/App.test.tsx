import React from "react";
import { App } from "../../components/App";
import { mount, ReactWrapper } from "enzyme";

describe("App base tests", () => {
  let fullMount: ReactWrapper;

  beforeAll(() => {
    fullMount = mount(<App />);
  });

  afterAll(() => {
    fullMount.unmount();
  });

  test("App should render an element with id `app-element`", () => {
    let baseElement = fullMount.find("#app-element");
    expect(baseElement).toExist();
  });

  test("App should render an element with id `playform-element`", () => {
    let baseElement = fullMount.find("#playform-element");
    expect(baseElement).toExist();
  });
});
