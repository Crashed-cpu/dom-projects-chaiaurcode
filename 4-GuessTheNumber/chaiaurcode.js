let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    displayMessage('Number not in valid range!');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage('Game Over. You Lost!!\nRandom number was' + randomNumber);
      endGame();
    }
    displayGuess(guess);
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guess the number YaY`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is Tooo low`);
  } else {
    displayMessage(`Number is Tooo high`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += ` ${guess}`;
  numGuess++;
  remaining.innerHTML = `${8 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<H2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', ''); // because pair is compulsory
  p.classList.add('button'); // start button
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    newGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${8 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
