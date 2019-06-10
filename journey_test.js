Feature("RPS");

Before((I) => {
  I.amOnPage("/");
  I.see("Rock Paper Scissors!");
});

Scenario("Rock Paper Scissors", (I) => {
  I.say("2 rocks is a draw");
  I.fillField("#p1Input", "rock");
  I.fillField("#p2Input", "rock");
  I.click("#submitButton");
  I.see("DRAW");

  I.say("rock beats scissors");
  I.fillField("#p1Input", "rock");
  I.fillField("#p2Input", "scissors");
  I.click("#submitButton");
  I.see("P1 Wins!");
  I.fillField("#p1Input", "scissors");
  I.fillField("#p2Input", "rock");
  I.click("#submitButton");
  I.see("P2 Wins!");

  I.say("scissors beats paper");
  I.fillField("#p1Input", "scissors");
  I.fillField("#p2Input", "paper");
  I.click("#submitButton");
  I.see("P1 Wins!");
  I.fillField("#p1Input", "paper");
  I.fillField("#p2Input", "scissors");
  I.click("#submitButton");
  I.see("P2 Wins!");

  I.say("paper beats rock");
  I.fillField("#p1Input", "paper");
  I.fillField("#p2Input", "rock");
  I.click("#submitButton");
  I.see("P1 Wins!");
  I.fillField("#p1Input", "rock");
  I.fillField("#p2Input", "paper");
  I.click("#submitButton");
  I.see("P2 Wins!");

  I.say("invalid inputs are no good!");
  I.fillField("#p1Input", "notrock");
  I.fillField("#p2Input", "scissors");
  I.click("#submitButton");
  I.see("INVALID");
  I.fillField("#p1Input", "scissors");
  I.fillField("#p2Input", "king ddd");
  I.click("#submitButton");
  I.see("INVALID");
});
