const rock = document.querySelector('.rock_js');
const scissors = document.querySelector('.scissors_js');
const paper = document.querySelector('.paper_js');
const rpsResult = document.querySelector('.rsp_result_js');
const rpsButton = document.querySelector('.rsp_button_js');
const rpsScore = document.querySelector('.rsp_score_js');

const choices = ['Камінь', 'Ножиці', 'Папір'];

let userScore = 0;
let computerScore = 0;

rock.addEventListener('click', () => {
  playGame('Камінь');
});

scissors.addEventListener('click', () => {
  playGame('Ножиці');
});

paper.addEventListener('click', () => {
  playGame('Папір');
});

function playGame(userChoice) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];

  rpsButton.textContent = computerChoice;

  if (userChoice === computerChoice) {
    rpsResult.textContent = 'Нічия!';
    rpsResult.style.color = '#000000';
  } else if (
    (userChoice === 'Камінь' && computerChoice === 'Ножиці') ||
    (userChoice === 'Ножиці' && computerChoice === 'Папір') ||
    (userChoice === 'Папір' && computerChoice === 'Камінь')
  ) {
    rpsResult.textContent = 'Ви виграли раунд!';
    rpsResult.style.color = '#2ec660';
    userScore++;
  } else {
    rpsResult.textContent = "Комп'ютер виграв раунд!";
    rpsResult.style.color = 'rgb(216, 58, 58)';
    computerScore++;
  }

  rpsScore.innerHTML = `
    Рахунок <br>
    Комп'ютер - ${computerScore} <br>
    Ви - ${userScore}
  `;
}
