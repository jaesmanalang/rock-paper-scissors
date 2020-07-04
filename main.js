const optionsContainer = document.querySelector('.options');
const optionButtons = document.querySelectorAll('.btn-circle');
const pickContainer = document.querySelector('.pick');
const playerPick = document.querySelector('.player-pick');
const computerPick = document.querySelector('.computer-pick');
const btnCircleBig = document.querySelectorAll('.btn-circle-big');
const playerPickImg = document.getElementById('player-pick-img');
const computerPickImg = document.getElementById('computer-pick-img');
const playAgainBtn = document.getElementById('play-again');
const declare = document.getElementById('declare');
const score = document.getElementById('score');

const options = ['rock', 'paper', 'scissors'];
let currentScore = 0;
let playerChoice = '';
let computerChoice = '';

function startGame() {
  reset();
  loadEventListeners();
}

function loadEventListeners() {
  optionButtons.forEach(btn => {
    btn.addEventListener('click', getPlayerChoice);
  });

  playAgainBtn.addEventListener('click', startGame);
}

/**
 * Generate random value from options
 */
function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

/**
 * Stores player choice on selected button
 * @param {event} e targets the event click
 */
function getPlayerChoice(e) {
  playerChoice = e.currentTarget.value;
  computerChoice = getComputerChoice();
  displayPicks(playerChoice, computerChoice);
  checkWinner(playerChoice, computerChoice);
}

/**
 * Add class and replace icon based on picks
 * @param {string} playerChoice get playerChoice value
 * @param {string} computerChoice get computerChoice value
 */
function displayPicks(playerChoice, computerChoice) {
  optionsContainer.style.display = 'none';
  pickContainer.style.display = 'flex';
  btnCircleBig[0].classList.add(`${playerChoice}`);
  playerPickImg.src = `images/icon-${playerChoice}.svg`;
  btnCircleBig[1].classList.add(`${computerChoice}`);
  computerPickImg.src = `images/icon-${computerChoice}.svg`;
}

/**
 * Check the winner and display the result
 * @param {string} playerChoice check playerChoice value
 * @param {string} computerChoice check computerChoice value
 */
function checkWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    declare.innerText = 'DRAW';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    updateScore(1);
    declare.innerText = 'YOU WIN';
  } else {
    updateScore(-1);
    declare.innerText = 'YOU LOSE';
  }
  score.innerText = currentScore;
}

function updateScore(value) {
  currentScore += value;
}

function reset() {
  optionsContainer.style.display = 'flex';
  pickContainer.style.display = 'none';
  btnCircleBig[0].classList.remove('rock', 'paper', 'scissors');
  btnCircleBig[1].classList.remove('rock', 'paper', 'scissors');
}

startGame();
