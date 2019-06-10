import { play } from "../logic/playRPS";

describe("Test the play logic", () => {
  it("The play function returns `Hello World`", () => {
    expect(play()).toEqual("Hello World!");
  });
});
