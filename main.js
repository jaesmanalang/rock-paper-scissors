const pickContainer = document.querySelector('.pick');
const weaponsContainer = document.querySelector('.weapons');
const weaponButtons = document.querySelectorAll('.weapon-btn');
const playerPickContainer = document.querySelector('.player-pick');
const computerPickContainer = document.querySelector('.computer-pick');
const playAgainBtn = document.querySelector('.play-again-btn');
const result = document.querySelector('.result');
const container = document.querySelector('.container');

const options = ['rock', 'paper', 'scissors'];
const random = Math.floor(Math.random() * options.length);
let playerPick = '';
let computerPick = '';
let announce = '';

function startGame() {
  playerPick = '';
  computerPick = '';
  // pickContainer.innerHTML = '';
  // Reset
  // container.removeChild('pick');
  weaponsContainer.classList.remove('hide');
  pickContainer.classList.add('hide');
  loadEventListeners();
}

function pick(e) {
  playerPick = e.currentTarget.value;
  computerPick = getComputerPick();
  console.log(playerPick);
  console.log(computerPick);
  displayPick();
  result.innerText = getResult(playerPick, computerPick);
  console.log(getResult(playerPick, computerPick));
}

function displayPick() {
  weaponsContainer.classList.add('hide');
  pickContainer.classList.remove('hide');
  // Create button and image elements
  const playerBtn = document.createElement('button');
  const playerImg = document.createElement('img');
  const computerBtn = document.createElement('button');
  const computerImg = document.createElement('img');

  // Add classes and src attribute based on pick
  playerBtn.classList.add('weapon-btn', playerPick);
  playerImg.setAttribute('src', `images/icon-${playerPick}.svg`);
  computerBtn.classList.add('weapon-btn', computerPick);
  computerImg.setAttribute('src', `images/icon-${computerPick}.svg`);

  playerBtn.appendChild(playerImg);
  computerBtn.appendChild(computerImg);

  playerPickContainer.appendChild(playerBtn);
  computerPickContainer.appendChild(computerBtn);
}

function getComputerPick() {
  return options[random];
}

function loadEventListeners() {
  weaponButtons.forEach(btn => {
    btn.addEventListener('click', pick);
  });

  playAgainBtn.addEventListener('click', startGame);
}

function getResult(player, computer) {
  if (player === computer) {
    return 'DRAW';
  } else if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'YOU WIN';
  } else {
    return 'YOU LOSE';
  }
}

startGame();
