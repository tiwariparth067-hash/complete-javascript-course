'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1
let message = document.querySelector('.message')
let score = 20
document.querySelector('.number').textContent = secretNumber

document.querySelector('.check').addEventListener('click', function () {
     const guess = document.querySelector('.guess').value;
     console.log(guess);

     if (!guess) {
          message.textContent = 'No number'
     } else if (guess == secretNumber) {
          message.textContent = 'Correct Number'
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
               message.textContent = 'Too High'
               score--
               document.querySelector('.score').textContent = score
          } else {
               message.textContent = 'You lost!'
          }
     }
})
