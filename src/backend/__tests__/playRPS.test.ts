import { playTheGame } from "../playRPS";
import { FingerFormation, Results } from "../../shared/enums";
import sinon from "sinon";

describe("Test playTheGame", () => {
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
    expect(playTheGame(FingerFormation.Scissors, FingerFormation.Rock)).toEqual(
      Results.P2Wins,
    );
  });
  it("Paper vs Rock", () => {
    expect(playTheGame(FingerFormation.Paper, FingerFormation.Rock)).toEqual(
      Results.P1Wins,
    );
  });
  it("Paper vs Scissors", () => {
    expect(playTheGame(FingerFormation.Paper, FingerFormation.Scissors)).toEqual(
      Results.P2Wins,
    );
  });
  it("Rock vs Paper", () => {
    expect(playTheGame(FingerFormation.Rock, FingerFormation.Paper)).toEqual(
      Results.P2Wins,
    );
  });
  it("Rock vs Scissors", () => {
    expect(playTheGame(FingerFormation.Rock, FingerFormation.Scissors)).toEqual(
      Results.P1Wins,
    );
  });
  it("Scissors vs Paper", () => {
    expect(playTheGame(FingerFormation.Scissors, FingerFormation.Paper)).toEqual(
      Results.P1Wins,
    );
  });
  it("Rock vs Rock", () => {
    expect(playTheGame(FingerFormation.Rock, FingerFormation.Rock)).toEqual(Results.Draw);
  });
  it("Scissors vs Scissors", () => {
    expect(playTheGame(FingerFormation.Scissors, FingerFormation.Scissors)).toEqual(
      Results.Draw,
    );
  });
  it("Paper vs Paper", () => {
    expect(playTheGame(FingerFormation.Paper, FingerFormation.Paper)).toEqual(
      Results.Draw,
    );
  });
  it("Invalid vs Valid", () => {
    expect(playTheGame("taco", FingerFormation.Paper)).toEqual(Results.Invalid);
  });
  it("Valid vs Inalid", () => {
    expect(playTheGame(FingerFormation.Rock, "taco")).toEqual(Results.Invalid);
  });
  it("Invalid vs Invalid", () => {
    expect(playTheGame("taco", "cat")).toEqual(Results.Invalid);
  });
});
