const choices = document.querySelectorAll(".choice");
const playerChoiceSpan = document.getElementById("player-choice");
const computerChoiceSpan = document.getElementById("computer-choice");
const winnerText = document.getElementById("winner");
const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

const options = ["pedra", "papel", "tesoura"];

choices.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.dataset.choice;
    const computerChoice = options[Math.floor(Math.random() * options.length)];

    playerChoiceSpan.textContent = playerChoice;
    computerChoiceSpan.textContent = computerChoice;

    if (playerChoice === computerChoice) {
      winnerText.textContent = "Empate!";
    }else if (
      (playerChoice === "pedra" && computerChoice === "tesoura") ||
      (playerChoice === "papel" && computerChoice === "pedra") ||
      (playerChoice === "tesoura" && computerChoice === "papel")
    ) {
      winnerText.textContent = "Você ganhou!";
      playerScore++;
      playerScoreSpan.textContent = playerScore;
    } else {
      winnerText.textContent = "Alexa ganhou!";
      computerScore++;
      computerScoreSpan.textContent = computerScore;
    }

  });
});

const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
  playerChoiceSpan.textContent = "-";
  computerChoiceSpan.textContent = "-";
  winnerText.textContent = "Quem será o vencedor?";
});

