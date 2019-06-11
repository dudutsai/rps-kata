import { play } from "../playRPS";
import { RPSThrow, Results } from "../../shared/enums";
import sinon from "sinon";

describe("Test play", () => {
  let testSpy: any;

  beforeAll(() => {
    testSpy = {
      p1Wins: sinon.stub().resolves(),
      p2Wins: sinon.stub().resolves(),
      draw: sinon.stub().resolves(),
      invalid: sinon.stub().resolves(),
    };
  });

  it("Scissors vs Rock", () => {
    expect(play(RPSThrow.Scissors, RPSThrow.Rock)).toEqual(
      Results.P2Wins,
    );
  });
  it("Paper vs Rock", () => {
    expect(play(RPSThrow.Paper, RPSThrow.Rock)).toEqual(
      Results.P1Wins,
    );
  });
  it("Paper vs Scissors", () => {
    expect(play(RPSThrow.Paper, RPSThrow.Scissors)).toEqual(
      Results.P2Wins,
    );
  });
  it("Rock vs Paper", () => {
    expect(play(RPSThrow.Rock, RPSThrow.Paper)).toEqual(
      Results.P2Wins,
    );
  });
  it("Rock vs Scissors", () => {
    expect(play(RPSThrow.Rock, RPSThrow.Scissors)).toEqual(
      Results.P1Wins,
    );
  });
  it("Scissors vs Paper", () => {
    expect(play(RPSThrow.Scissors, RPSThrow.Paper)).toEqual(
      Results.P1Wins,
    );
  });
  it("Rock vs Rock", () => {
    expect(play(RPSThrow.Rock, RPSThrow.Rock)).toEqual(Results.Draw);
  });
  it("Scissors vs Scissors", () => {
    expect(play(RPSThrow.Scissors, RPSThrow.Scissors)).toEqual(
      Results.Draw,
    );
  });
  it("Paper vs Paper", () => {
    expect(play(RPSThrow.Paper, RPSThrow.Paper)).toEqual(
      Results.Draw,
    );
  });
  it("Invalid vs Valid", () => {
    expect(play("taco", RPSThrow.Paper)).toEqual(Results.Invalid);
  });
  it("Valid vs Inalid", () => {
    expect(play(RPSThrow.Rock, "taco")).toEqual(Results.Invalid);
  });
  it("Invalid vs Invalid", () => {
    expect(play("taco", "cat")).toEqual(Results.Invalid);
  });
});
