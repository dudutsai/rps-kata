import { FingerFormation, Results } from "../shared/enums";

export function playTheGame(player1: string, player2: string) {
  player1 = player1.toUpperCase();
  player2 = player2.toUpperCase();
  if (isInvalid(player1) || isInvalid(player2)) {
    return Results.Invalid;
  }

  if (player1 === player2) {
    return Results.Draw;
  }

  if (
    (player1 === FingerFormation.Rock &&
      player2 === FingerFormation.Scissors) ||
    (player1 === FingerFormation.Paper &&
      player2 === FingerFormation.Rock) ||
    (player1 === FingerFormation.Scissors &&
      player2 === FingerFormation.Paper)
  ) {
    return Results.P1Wins;
  } else {
    return Results.P2Wins;
  }

  function isInvalid(aThrow: string) {
    const validThrows = [
      FingerFormation.Rock,
      FingerFormation.Scissors,
      FingerFormation.Paper,
    ];
    return !validThrows.includes(aThrow);
  }
}
