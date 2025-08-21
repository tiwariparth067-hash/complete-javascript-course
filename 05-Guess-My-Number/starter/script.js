'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1
let message = document.querySelector('.message')
let score = 20
let highscore = 0

function checkGuess() {
     const guess = Number(document.querySelector('.guess').value);
     console.log(guess);

     if (!guess) {
          message.textContent = 'No number'
     } else if (guess === secretNumber) {
          message.textContent = 'Correct Number'
          document.querySelector('body').style.backgroundColor = '#60b347'
          document.querySelector('.number').style.width = '30rem'
          document.querySelector('.number').textContent = secretNumber
          if (score > highscore) {
               highscore = score
               document.querySelector('.highscore').textContent = highscore
          }
     } else if (guess > secretNumber) {
          if (score > 0) {
               message.textContent = 'Too High'
               score--
               document.querySelector('.score').textContent = score
          } else {
               message.textContent = 'You lost!'
          }
     } else {
          if (score > 0) {
               message.textContent = 'Too low'
               score--
               document.querySelector('.score').textContent = score
          } else {
               message.textContent = 'You lost!'
          }
     }
}

document.querySelector('.check').addEventListener('click', checkGuess)

document.querySelector('.guess').addEventListener('keydown', function (e) {
     if (e.key === 'Enter') {
          checkGuess();
     }
})


document.querySelector('.again').addEventListener('click', function () {
     score = 20
     secretNumber = Math.trunc(Math.random() * 20) + 1
     message = message.textContent = 'Start guessing...'
     document.querySelector('.score').textContent = score
     document.querySelector('.number').style.width = '15rem'
     document.querySelector('body').style.backgroundColor = '#222'
     document.querySelector('.number').textContent = '?'
     document.querySelector('.guess').value = ''
})