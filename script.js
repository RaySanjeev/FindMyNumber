'use strict';
// GLOBAL VARIABLES
let score = 20;
let highscore = 0;

// DOM ELEMENTS
const body = document.querySelector('body');
const again = document.querySelector('.again');
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const label_score = document.querySelector('.score');
const label_highscore = document.querySelector('.highscore');

// DOM DELEGATION

let randomNumber = Math.trunc(Math.random() * 20) + 1;

check.addEventListener('click', () => {
  if (!guess.value) {
    message.textContent = 'Please enter a number!';
  }
  const checkValue = Number(guess.value);

  if (checkValue === randomNumber) {
    message.textContent = 'Correct Number';
    body.style.backgroundColor = '#60b347';
    label_score.textContent = score;
    number.textContent = randomNumber;

    if (score > highscore) {
      highscore = score;
      label_highscore.textContent = highscore;
    }
  }

  if (checkValue > randomNumber) {
    message.textContent = 'Too High!';
    score = score - 1;
  }

  if (checkValue < randomNumber) {
    message.textContent = 'Too Low';
    score = score - 1;
  }
});

again.addEventListener('click', () => {
  score = 20;
  message.textContent = 'Start guessing...';
  label_score.textContent = score;
  body.style.backgroundColor = '#222';
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  number.textContent = '?';
});
