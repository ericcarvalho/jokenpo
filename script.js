const choices = document.querySelectorAll('.choice');
const playerChoiceSpan = document.getElementById('player-choice');
const computerChoiceSpan = document.getElementById('computer-choice');
const winnerText = document.getElementById('winner');
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const resetBtn = document.getElementById('reset');

let playerScore = 0;
let computerScore = 0;

const options = ["pedra", "papel", "tesoura"];

choices.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.dataset.choice;
    const computerChoice = options[Math.floor(Math.random() * options.length)];

    playerChoiceSpan.textContent = playerChoice;
    computerChoiceSpan.textContent = computerChoice;

    if (playerChoice === computerChoice) {
      winnerText.textContent = "Empate!";
    } else if (
      (playerChoice === "pedra" && computerChoice === "tesoura") ||
      (playerChoice === "papel" && computerChoice === "pedra") ||
      (playerChoice === "tesoura" && computerChoice === "papel")
    ) {
      winnerText.textContent = "Você venceu!";
      playerScore++;
      playerScoreEl.textContent = playerScore;
    } else {
      winnerText.textContent = "Computador venceu!";
      computerScore++;
      computerScoreEl.textContent = computerScore;
    }
  });
});

resetBtn.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = 0;
  computerScoreEl.textContent = 0;
  playerChoiceSpan.textContent = "-";
  computerChoiceSpan.textContent = "-";
  winnerText.textContent = "Quem será o vencedor?";
});
