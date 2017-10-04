'use strict';

var userPoints = 0;
console.log('Hello there!');
alert('Welcome to my guessing game! This is an opportunity for you to get to know a little about me.');

//Intro question
var user = prompt('What is your name?');
alert('Hi ' + user + '! I am so glad you want to play my game. Please answer the following 7 questions:');
console.log('User name is ' + user + '.');

//Question 1
function questionOne(){
  var answer1 = prompt('Do I have a passion for web development? Type yes or no.').toLowerCase();
  console.log('The user answered: ' + answer1);

  if (answer1 === 'yes' || answer1 === 'Y') {
    userPoints++;
    alert('I do! I love digging into code to make things look and work right. You now have ' + userPoints + ' point(s).');
  } else {
    alert('Wrong! I am super passionate about building multi-functional websites utilizing video and graphics. You now have ' + userPoints + ' point(s).');
    console.log('The user has ' + userPoints + ' point(s)');
  }
}
questionOne();

//Question 2
function questionTwo(){
  var answer2 = prompt('Am I an entrepeneur? Type yes or no.').toUpperCase();
  console.log('The user answered: ' + answer2);

  if (answer2 === 'YES' || answer2 === 'Y') {
    userPoints++;
    alert ('You\'re right! I love having something I can put energy into and that I\'m passionate about! You now have ' + userPoints + ' point(s).');
  } else {
    alert ('Wrong, ' + user + '. I am super passionate about my business! You now have ' + userPoints + ' pont(s).');
    console.log('After question 3, the user has ' + userPoints + ' point(s)');
  }
}
questionTwo();

//Question3
function questionThree(){
  var answer3 = prompt('Do I speak a foreign language? Type yes or no.').toLowerCase();
  console.log('The user answered: ' + answer3);

  if (answer3 === 'yes' || answer3 === 'Y') {
    userPoints++;
    alert('Woohoo you guessed right! I speak spanish and love speaking it as much as possible when I travel. Again, I like a challenge! You now have ' + userPoints + ' point(s)');
  } else {
    alert('Wrong again ' + user + '! Language and culture is another big passion of mine. You now have ' + userPoints + ' point(s).');
    console.log('After question 3, the user has ' + userPoints + ' point(s).');
  }
}
questionThree();

//Question 4
var answer4 = prompt('Do I like cats more than dogs? Type yes or no.').toUpperCase();
console.log(answer4);

if (answer4 === 'NO' || answer4 === 'N') {
  userPoints++;
  alert('That\'s right! I love dogs; in fact, I\'ve been told I have the personality of a golden retriever. You now have ' + userPoints + ' point(s).');
} else {
  alert('Wrong ' + user + '! Although if it was the right cat, I might change my mind.');
  console.log('After question 4, the user has ' + userPoints + ' points.');
}

//Question 5
var answer5 = prompt('Is cookie dough my favorite flavor of ice cream? Type yes or no.').toLowerCase();
console.log('the user answered: ' + answer5);

if (answer5 === 'yes' || answer5 === 'Y') {
  userPoints++;
  alert('That\'s correct! Time. I love chocolate chip cookie dough! You now have ' + userPoints + ' point(s).');
} else {
  alert('Wrong ' + user + '. I like many flavors of ice cream, but am a huge fan of cookie dough. Yum! You now have ' + userPoints + ' point(s).');
  console.log('After question 5, the user has ' + userPoints + ' point(s).');
}

//Question 6
var attempts = 4;
var answer6 = prompt('How many foreign countries have I travelled too? Please enter the numerical value. You will have 4 attempts.');
while (attempts > 1) {
  if (answer6 < 5) {
    attempts = attempts - 1;
    answer6 = prompt('That is too low! Try again. \nHow many foreign countries have I travelled too?\nYou have ' + attempts + ' attempt(s) left.');
    console.log('The user guessed ' + answer6 + ' and has ' + attempts + ' attempts left');
  } else if (answer6 > 5) {
    attempts--;
    answer6 = prompt('That is too high! Try again.\nHow many foreign countries have I travelled too?\nYou have ' + attempts + ' attempt(s) left.');
    console.log('The user guessed ' + answer6 + ' and has ' + attempts + ' attempts left');
  } else if (answer6 === 5) {
    userPoints++;
    alert('That is correct! Alicia has travelled to 5 foreign countries!\nYou now have ' + userPoints + ' point(s)');
    console.log('After question 6, the user has ' + userPoints + ' point(s).');
  } else {
    attempts--;
    answer6 = prompt('Please guess a whole number.');
    console.log('After question 6, the user has ' + userPoints + ' point(s).');
  }
}
if (attempts = 1) {
  alert('Sorry! You ran out of attempts.');
  console.log('You\'re final score is ' + userPoints + ' point(s).');
}

//Question 7
// var favoriteHolidays = ['christmas' , 'thanksgiving' , 'halloween' , 'easter' , 'new years'];
// var arrayLength = favoriteHolidays.length; // Item in array
// var attemptsHolidays = 5;
//
// var answer7 = prompt('Can you guess one of my favorite holidays?').toLowerCase();
// console.log('question7');
//
// while  (attemptsHolidays > 0) {
//   for (var counter = 0; counter < favoriteHolidays.length; counter++) {
//     if (answer7 === favoriteHolidays[counter]) {
//       alert('You got one right!');
//       console.log('The user got question 7 right.');
//       userPoints++;
//     }
//   }
// }
// if (answer7 === favoriteHolidays){
//   userPoints++;
//     alert('That is correct! ' + answer7 + ' is on my list of favorite holidays!');
//     console.log('The user guessed ' + answer7 + ' and has ' + (attemptsHolidays) + ' attempt(s) left.');
//   } else {
//   attemptsHolidays--;
//     answer7 = prompt('Wrong answer, ' + answer7 + ' is not on my list of favorite holidays.\nYou have ' + attemptsHolidays + '  attempts left.');
//     console.log('The user guessed ' + answer7 + ' and has ' + (attemptsHolidays) + ' attempt(s) left.');
//   }
//   alert('My favorite holidays are:\n' + favoriteHolidays + '\n' + user + ' , you scored ' + userPoints + ' out of 7 points.');
//   console.log('After question 7 the user has ' + userPoints + ' point(s).');
// }

/*Conclusion
if (userPoints === 7) {
  alert('Wow! You know me so well, perfect score.');
  console.log('The user scored perfectly.');
} else if (userPoints < 7) {
  alert('Congrats ' + user + '! You got' + userPoints + 'out of 7 questions correct!');
}
*/
