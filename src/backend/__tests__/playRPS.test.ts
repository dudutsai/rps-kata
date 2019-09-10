import { play } from "../logic/playRPS";

describe("Test the play logic", () => {
  it("play returns 'p2 wins' in Scissors vs. Rock", () => {
    expect(play("Scissors", "Rock")).toEqual("p2 wins!");
  });
});
