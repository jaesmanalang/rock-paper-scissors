const pickContainer = document.querySelector('.pick');
const weaponsContainer = document.querySelector('.weapons');
const weaponButtons = document.querySelectorAll('.weapon-btn');
const playerPickContainer = document.querySelector('.player-pick');
const computerPickContainer = document.querySelector('.computer-pick');

const options = ['rock', 'paper', 'scissors'];
const random = Math.floor(Math.random() * options.length);
let playerPick = '';
let computerPick = '';

weaponButtons.forEach(btn => {
  btn.addEventListener('click', pick);
});

function pick(e) {
  playerPick = e.currentTarget.value;
  computerPick = options[random];
  console.log(playerPick);
  console.log(computerPick);
  weaponsContainer.classList.add('hide');
  pickContainer.classList.remove('hide');
  displayPick();
}

function displayPick() {
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
