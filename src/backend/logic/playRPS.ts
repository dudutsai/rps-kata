export function play(p1input: string, p2input: string) {
  if (p1input == p2input) return "It's a tie!";
  if (
    (p1input == "Paper" && p2input == "Rock") ||
    (p1input == "Rock" && p2input == "Scissors") ||
    (p1input == "Scissors" && p2input == "Paper")
  )
    return "p1 wins!";
  return "p2 wins!";
}
