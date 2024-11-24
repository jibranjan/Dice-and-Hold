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

let scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;

$btnRoll.addEventListener('click', () => {
    // Generate a random number between 1 and 6
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    
    // Display number rolled
    $dice.src = `dice-${randomNumber}.png`;
    $dice.classList.remove('hidden');
    const $activePlayerCurrentScore = document.getElementById(`current--${activePlayer}`);

    // Check for rolled number
    if (randomNumber !== 1) {
        // Add to current score
        currentScore += randomNumber;
        $activePlayerCurrentScore.textContent = currentScore;
        if (currentScore >= 100) {
            gameOver($activePlayerCurrentScore);
        }
    } else {
        // Switch to next player
        switchPlayer($activePlayerCurrentScore);
    }
});

$btnHold.addEventListener('click', () => {
    scores[activePlayer] += currentScore;
    const $activePlayerTotalScore = document.getElementById(`score--${activePlayer}`);
    const $activePlayerCurrentScore = document.getElementById(`current--${activePlayer}`);
    $activePlayerTotalScore.textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
        gameOver($activePlayerCurrentScore);
    } else {
        switchPlayer($activePlayerCurrentScore);
    }
});


// New game
$btnNew.addEventListener('click', () => {
    $btnHold.classList.remove('hidden');
    $btnRoll.classList.remove('hidden');

    // Reset scores and state
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    
    // Update the UI
    $score0.textContent = 0;
    $score1.textContent = 0;
    $current0.textContent = 0;
    $current1.textContent = 0;
    
    // Hide dice
    $dice.classList.add('hidden');
    
    // Reset player classes
    $players.forEach(player => {
        player.classList.remove('player--active');
        player.classList.remove('player--winner');
    });
    $players[0].classList.add('player--active');
});

function switchPlayer($activePlayerCurrentScore) {
    currentScore = 0;
    $activePlayerCurrentScore.textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    $players.forEach(player => {
        player.classList.toggle('player--active');
    });
}

function gameOver($activePlayerCurrentScore) {
    $dice.classList.add('hidden');
    $activePlayerCurrentScore.closest('.player').classList.add('player--winner');
    $btnHold.classList.add('hidden');
    $btnRoll.classList.add('hidden');
}
