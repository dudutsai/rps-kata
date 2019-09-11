import { FingerFormation, Results } from "../shared/enums";
// import { PlayForm } from "../frontend/components/PlayForm";

// type IUiType = typeof PlayForm.prototype;

// type ICustomType = Pick<IUiType, "p2Wins" | "p1Wins" | "drawRound">;
// let k: ICustomType;

export function playTheGame(player1: string, player2: string, ui: any) {
  player1 = player1.toUpperCase();
  player2 = player2.toUpperCase();
  if (isInvalid(player1) || isInvalid(player2)) {
    ui.invalidGameThing();
    return;
  }

  if (player1 === player2) {
    ui.drawRound();
    return;
  }

  if (
    (player1 === FingerFormation.Rock &&
      player2 === FingerFormation.Scissors) ||
    (player1 === FingerFormation.Paper && player2 === FingerFormation.Rock) ||
    (player1 === FingerFormation.Scissors && player2 === FingerFormation.Paper)
  ) {
    ui.p1Wins();
    return;
  } else {
    ui.p2Wins();
    return;
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

export type IPlayTheGame = typeof playTheGame;
