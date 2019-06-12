import { play } from "../../backend/playRPS";
import { RPSThrow, Results } from "../../shared/enums";
import sinon from "sinon";

describe("Test play", () => {
  let testSpy: any;
  testSpy = {
    p1Wins: sinon.stub().resolves(),
    p2Wins: jest.fn(),
    draw: sinon.stub().resolves(),
    invalid: sinon.stub().resolves(),
  };

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
    play(RPSThrow.Scissors, RPSThrow.Rock, testSpy);
    expect(testSpy.p2Wins).toHaveBeenCalledTimes(1);
  });
  it("Paper vs Rock", () => {
    expect(play(RPSThrow.Paper, RPSThrow.Rock, testSpy)).toEqual(
      Results.P1Wins,
    );
  });
  it("Paper vs Scissors", () => {
    expect(play(RPSThrow.Paper, RPSThrow.Scissors, testSpy)).toEqual(
      Results.P2Wins,
    );
  });
  it("Rock vs Paper", () => {
    expect(play(RPSThrow.Rock, RPSThrow.Paper, testSpy)).toEqual(
      Results.P2Wins,
    );
  });
  it("Rock vs Scissors", () => {
    expect(play(RPSThrow.Rock, RPSThrow.Scissors, testSpy)).toEqual(
      Results.P1Wins,
    );
  });
  it("Scissors vs Paper", () => {
    expect(play(RPSThrow.Scissors, RPSThrow.Paper, testSpy)).toEqual(
      Results.P1Wins,
    );
  });
  it("Rock vs Rock", () => {
    expect(play(RPSThrow.Rock, RPSThrow.Rock, testSpy)).toEqual(
      Results.Draw,
    );
  });
  it("Scissors vs Scissors", () => {
    expect(
      play(RPSThrow.Scissors, RPSThrow.Scissors, testSpy),
    ).toEqual(Results.Draw);
  });
  it("Paper vs Paper", () => {
    expect(play(RPSThrow.Paper, RPSThrow.Paper, testSpy)).toEqual(
      Results.Draw,
    );
  });
  it("Invalid vs Valid", () => {
    expect(play("taco", RPSThrow.Paper, testSpy)).toEqual(
      Results.Invalid,
    );
  });
  it("Valid vs Inalid", () => {
    expect(play(RPSThrow.Rock, "taco", testSpy)).toEqual(
      Results.Invalid,
    );
  });
  it("Invalid vs Invalid", () => {
    expect(play("taco", "cat", testSpy)).toEqual(Results.Invalid);
  });
});
