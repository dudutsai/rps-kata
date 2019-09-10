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
  it("play returns 'p2 wins!' in Rock vs. Paper", () => {
    expect(play("Rock", "Paper")).toEqual("p2 wins!");
  });
  it("play returns 'p1 wins!' in Rock vs. Scissors", () => {
    expect(play("Rock", "Scissors")).toEqual("p1 wins!");
  });
  it("play returns 'p1 wins!' in Scissors vs. Paper", () => {
    expect(play("Scissors", "Paper")).toEqual("p1 wins!");
  });
  it("play returns 'It's a tie!' in Rock vs. Rock", () => {
    expect(play("Rock", "Rock")).toEqual("It's a tie!");
  });
  it("play returns 'It's a tie!' in Scissors vs. Scissors", () => {
    expect(play("Scissors", "Scissors")).toEqual("It's a tie!");
  });
  it("play returns 'It's a tie!' in Paper vs. Paper", () => {
    expect(play("Paper", "Paper")).toEqual("It's a tie!");
  });
});
