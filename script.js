'use strict';

const $players = document.querySelectorAll('.player');
const $score0 = document.getElementById('score--0');
const $score1 = document.getElementById('score--1');
const $current0 = document.getElementById('current--0');
const $current1 = document.getElementById('current--1');

const $dice = document.querySelector('.dice');
const $btnNew = document.querySelector('.btn--new');
const $btnRoll = document.querySelector('.btn--roll');
const $btnHold = document.querySelector('.btn--hold');

const scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;

$btnRoll.addEventListener('click', () => {
    // Generate a random number between 1 and 6
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    
    // Display number rolled
    $dice.src = `dice-${randomNumber}.png`;
    $dice.classList.remove('hidden');
    const $activePlayer = document.getElementById(`current--${activePlayer}`);

    // Check for rolled number
    if (randomNumber !== 1) {
        // Add to current score
        currentScore += randomNumber;
        $activePlayer.textContent = currentScore;
    } else {
        // Switch to next player
        currentScore = 0;
        $activePlayer.textContent = currentScore;

        activePlayer = activePlayer === 0 ? 1 : 0;
        $players.forEach(player => {
            player.classList.toggle('player--active');
        });
    }
});
