'use strict';
/*
console.log(document.querySelector('.message').textContent);



document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value);

*/

let secretnumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

//document.querySelector('.number').textContent = secretnumber;

document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess);

    // when no number

    if (!guess) {
        document.querySelector('.message').textContent = 'no number';
    }

    // when player wins

    else if (guess == secretnumber) {

        document.querySelector('.message').textContent = "You're right !";

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        document.querySelector('.guess').value = secretnumber;

        if (score > highscore) {

            highscore = score;

            document.querySelector('.highscore').textContent = highscore;
        }

    }

    // when no is too high

    else if (guess > secretnumber) {

        if (score > 0) {

            document.querySelector('.message').textContent = 'too high! ';

            score--;

            document.querySelector('.score').textContent = score;
        }

        else {
            document.querySelector('.message').textContent = 'YOU LOST !!'
        }

    }

    // when no is too low

    else if (guess < secretnumber) {

        if (score > 0) {

            document.querySelector('.message').textContent = 'too low! ';

            score--;

            document.querySelector('.score').textContent = score;
        }

        else {

            document.querySelector('.message').textContent = 'YOU LOST !!'

        }

    }

});

document.querySelector('.again').addEventListener('click', function () {

    score = 20;

    secretnumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'start guessing ... ';

    document.querySelector('.number').textContent = '?';

    document.querySelector('.score').textContent = score;

    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';
})
