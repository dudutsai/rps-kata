import { playTheGame } from "../playRPS";
import { FingerFormation, Results } from "../../shared/enums";

interface ITestSpy {
  p1Wins: jest.Mock;
  p2Wins: jest.Mock;
  draw: jest.Mock;
  invalid: jest.Mock;
}

describe("Test playTheGame", () => {
  let testSpy: ITestSpy;
  beforeAll(() => {
    testSpy = {
      p1Wins: jest.fn(),
      p2Wins: jest.fn(),
      draw: jest.fn(),
      invalid: jest.fn(),
    };
  });
  afterEach(() => {
    testSpy.p1Wins.mockClear();
    testSpy.p2Wins.mockClear();
    testSpy.draw.mockClear();
    testSpy.invalid.mockClear();
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
    expect(
      playTheGame(FingerFormation.Paper, FingerFormation.Scissors),
    ).toEqual(Results.P2Wins);
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
    expect(
      playTheGame(FingerFormation.Scissors, FingerFormation.Paper),
    ).toEqual(Results.P1Wins);
  });
  it("Rock vs Rock", () => {
    expect(playTheGame(FingerFormation.Rock, FingerFormation.Rock)).toEqual(
      Results.Draw,
    );
  });
  it("Scissors vs Scissors", () => {
    expect(
      playTheGame(FingerFormation.Scissors, FingerFormation.Scissors),
    ).toEqual(Results.Draw);
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
