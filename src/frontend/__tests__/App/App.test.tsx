import React from "react";
import { App } from "../../components/App";
import { ReactWrapper, mount } from "enzyme";

describe("App tests", () => {
  let fullMount: ReactWrapper;

  beforeAll(() => {
    fullMount = mount(<App />);
  });

  afterAll(() => {
    fullMount.unmount();
  });

  it("Main app component renders", () => {
    let baseElement = fullMount.find("#app-element");
    expect(baseElement.exists()).toBeTruthy(); // Without package "jest-enzyme"
    expect(baseElement).toExist(); // With package "jest-enzyme"
  });
});
