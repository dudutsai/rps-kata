export function play(p1input: string, p2input: string) {
  if (
    (p1input == "Paper" && p2input == "Rock") ||
    (p1input == "Rock" && p2input == "Scissors")
  )
    return "p1 wins!";
  return "p2 wins!";
}
