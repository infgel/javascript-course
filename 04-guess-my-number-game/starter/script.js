'use strict';
// Game Development Hour 1 - Game Foundation & DOM Basics
console.log('=== GAME DEVELOPMENT: GUESS MY NUMBER ===');
console.log('Goal: Build a complete interactive game from scratch');
console.log('Focus: DOM manipulation, game state, and user interaction');

// DOM Element Selection - The Foundation
console.log('=== DOM ELEMENT SELECTION ===');

// Select elements by class name
const messageEl = document.querySelector('.message');
console.log(messageEl);
console.log(messageEl.textContent);
messageEl.textContent = 'Hello from JavaScript';

const scoreEl = document.querySelector('.score');
console.log('Score Element', scoreEl);
scoreEl.textContent = 50;

const numberEl = document.querySelector('.number');
// numberEl.textContent = 15;

const highscoreEl = document.querySelector('.highscore');
// highscoreEl.textContent = 100;

const guessEl = document.querySelector('.guess');
// guessEl.value = 26;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Secret Number:', secretNumber);


// track the current score
let score = 20;
let highscore = 0;

// change the value of the score UI dynamically
document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

console.log ('Game state initialized!');

// basic game logic
document.querySelector('.check').addEventListener('click', function () {
  console.log('Check button clicked!');
  const guess = Number(document.querySelector('.guess').value);
  console.log('Player guessed:', guess);
  if (guess === secretNumber) {
    console.log('Your guess is correct!');
    document.querySelector('.message').textContent = 'Correct Number 🎉';
    if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.message').textContent = 'You have won! 🎉';
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
  } else if (guess > secretNumber) {
    console.log('Too high!');
    document.querySelector('.message').textContent = 'Too high! 🔥';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1 ) {
        document.querySelector('.message').textContent = 'You lost the game! Press again! 💥';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.guess').disabled = true;
        document.querySelector('.check').disabled = true;
    }
  } else if (guess < secretNumber) {
    console.log('Too low!');
    document.querySelector('.message').textContent = 'Too low! 🥺';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1 ) {
        document.querySelector('.message').textContent = 'You lost the game! Press again! 💥';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.guess').disabled = true;
        document.querySelector('.check').disabled = true;
    }
  }
});

// HOUR 2

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // restart the message display
    document.querySelector('.message').textContent = 'Start guessing...';
    // restart question mark or reveal secret number
    document.querySelector('.number').textContent = '?';
    // reset score display
    document.querySelector('.score').textContent = score;
    // clear input field
    document.querySelector('.guess').value = '';
    // enable input and check button
    document.querySelector('.guess').disabled = false;
    document.querySelector('.check').disabled = false;
});
