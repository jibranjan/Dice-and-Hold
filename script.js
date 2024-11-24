'use strict';

const $score0 = document.querySelector('#score--0');
const $score1 = document.querySelector('#score--1');
const $current0 = document.querySelector('#current--0');
const $current1 = document.querySelector('#current--1');

const $dice = document.querySelector('.dice');
const $btnNew = document.querySelector('.btn--new');
const $btnRoll = document.querySelector('.btn--roll');
const $btnHold = document.querySelector('.btn--hold');

let currentScore = 0;

$btnRoll.addEventListener('click', () => {
    // Generate a random number between 1 and 6
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    
    // Display number rolled
    $dice.src = `dice-${randomNumber}.png`;
    $dice.classList.remove('hidden');

    // Check for rolled number
    if (randomNumber !== 1) {
        // Add to current score
        currentScore += randomNumber;
        $current0.textContent = currentScore;
    } else {
        // Switch to next player
        
    }
});
