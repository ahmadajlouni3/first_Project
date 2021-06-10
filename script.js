// 'use strict';
let dc = document;
// let number = doc.querySelector('.number').textContent;

// console.log(number);

// let x = function () {
//   let scoreOutput = score;
//   if (scoreOutput < 0) {
//     dc.querySelector('.message').textContent = 'Your Score Is Empty Now';
//   } else {
//     dc.querySelector('.score').textContent = scoreOutput;
//     dc.querySelector('.number').textContent = Math.trunc(Math.random() * 20);
//   }
// };

// let y = function () {
//   score = 20;
// };
// dc.querySelector('.check').addEventListener('click', function () {
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let dm = function(msg){
  dc.querySelector('.message').textContent = msg;
}

dc.querySelector('.check').addEventListener('click', function () {
  let guess = Number(dc.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    dm('No Number!');
  } else if (guess === secretNumber) {
    dm('Correct Number');
    dc.querySelector('body').style.backgroundColor = 'green';
    dc.querySelector('.number').style.width = '30rem';
    dc.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      dc.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      dm(guess > secretNumber ? 'Too High' : 'Too Low');
      score;
    } else {
      dm('You Loss The Game');
      dc.querySelector('body').style.backgroundColor = 'tomato';
    }
  }
  dc.querySelector('.score').textContent = score;
});

dc.querySelector('.again').addEventListener('click', function () {
  dc.querySelector('.guess').value = '';
  score = 20;
  dc.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  dc.querySelector('body').style.backgroundColor = '#222';
  dc.querySelector('.number').textContent = '?';
  dc.querySelector('.number').style.width = '15rem';
  dm('Start guessing...');
});
