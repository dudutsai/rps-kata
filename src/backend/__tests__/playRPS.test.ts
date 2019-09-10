import { play } from "../logic/playRPS";

describe("Test the play logic", () => {
  it("play returns 'p2 wins!' in Scissors vs. Rock", () => {
    expect(play("Scissors", "Rock")).toEqual("p2 wins!");
  });
  it("play returns 'p1 wins!' in Paper vs. Rock", () => {
    expect(play("Paper", "Rock")).toEqual("p1 wins!");
  });
  it("play returns 'p2 wins!' in Paper vs. Scissors", () => {
    expect(play("Paper", "Scissors")).toEqual("p2 wins!");
  });
});
