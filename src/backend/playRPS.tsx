import { RPSThrow, Results } from "../shared/enums";

export function play(player1: string, player2: string) {
  player1 = player1.toUpperCase();
  player2 = player2.toUpperCase();
  if (isInvalid(player1) || isInvalid(player2)) {
    return Results.Invalid;
  }

  if (player1 === player2) {
    return Results.Draw;
  }

  if (
    (player1 === RPSThrow.Rock && player2 === RPSThrow.Scissors) ||
    (player1 === RPSThrow.Paper && player2 === RPSThrow.Rock) ||
    (player1 === RPSThrow.Scissors && player2 === RPSThrow.Paper)
  ) {
    return Results.P1Wins;
  } else {
    return Results.P2Wins;
  }

  function isInvalid(aThrow: string) {
    const validThrows = [
      RPSThrow.Rock,
      RPSThrow.Scissors,
      RPSThrow.Paper,
    ];
    return !validThrows.includes(aThrow);
  }
}
