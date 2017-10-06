'use strict';

var userPoints = 0;
console.log('Hello there!');
alert('Welcome to my guessing game! This is an opportunity for you to get to know a little about me.');

//Intro question
var user = prompt('What is your name?');
alert('Hi ' + user + '! I am so glad you want to play my game. Please answer the following 7 questions:');
console.log('User name is ' + user + '.');

var myQuestions = [
  'Do I have a passion for web development? Type yes or no.',
  'Am I an entrepeneur? Type yes or no.',
  'Do I speak a foreign language? Type yes or no.',
  'Do I like cats more than dogs? Type yes or no.',
  'Is cookie dough my favorite flavor of ice cream? Type yes or no.'
];
var correctAnswers = [
  'I do! I love digging into code to make things look and work right.',
  'You\'re right! I love having something I can put energy into and that I\'m passionate about!',
  'Woohoo you guessed right! I speak spanish and love speaking it as much as possible when I travel. Again, I like a challenge!',
  'That\'s right! I love dogs; in fact, I\'ve been told I have the personality of a golden retriever.',
  'That\'s correct! Time. I love chocolate chip cookie dough!'
];
var wrongAnswers = [
  'Wrong, ' + user + '. I am super passionate about my business!',
  'Wrong ' + user + '! Although if it was the right cat, I might change my mind.',
  'Wrong again ' + user + '! Language and culture is another big passion of mine.',
  'Wrong ' + user + '. I like many flavors of ice cream, but am a huge fan of cookie dough. Yum!'
];
var myResponses = ['yes', 'y', 'no', 'n'];
var pointsText = ' point(s)!';
var youNowHave = 'You now have ';
var userAnswered = 'The user answered: ';
var afterQuestion = 'After question ';
var index = 1;
var theUserHas = ', the user has ';

function runAllQuestions(){
  for(var i = 0; i < 5; i++) {
    var answer = prompt(myQuestions[i]).toLowerCase();
    console.log(userAnswered + answer);
    if (i == 1 || i == 2){
      if(answer === myResponses[2] || answer === myResponses[3]){
        userPoints++;
        alert(correctAnswers[i] + youNowHave + userPoints + pointsText);
      }else {
        alert(wrongAnswers[i] + youNowHave + userPoints + pointsText);
      }
    }
    else {
      if (answer === myResponses[0] || answer === myResponses[1]){
        userPoints++;
        alert(correctAnswers[i] + youNowHave + userPoints + pointsText);
      }else {
        alert(wrongAnswers[i] + youNowHave + userPoints + pointsText);
      }
      console.log(afterQuestion + index + theUserHas + userPoints + pointsText);
    }
  }
}
runAllQuestions();
//Question
function questionSix(){
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
}
questionSix();

//Question 7
function questionSeven(){
  var favoriteHolidays = ['christmas' , 'thanksgiving' , 'halloween' , 'easter' , 'new years'];
  var myHolidays = favoriteHolidays.join (' ');
  var flag = false;
  var attemptsHolidays = 5;
  var answer7 = prompt('Can you guess one of my favorite holidays?').toLowerCase();
  console.log('question7');

  while (!flag && attemptsHolidays > 0) {
    for (var counter = 0; counter < favoriteHolidays.length; counter++) {
      if (answer7 === favoriteHolidays[counter]) {
        flag = true;
      }
    }
    if (flag === true) {
      userPoints++;
      alert('That is correct! ' + answer7 + ' is on my list of favorite holidays!');
      console.log('The user guessed ' + answer7 + ' and has ' + (attemptsHolidays) + ' attempt(s) left.');
    } else {
      attemptsHolidays--;
      answer7 = prompt('Wrong answer, ' + answer7 + ' is not on my list of favorite holidays.\nYou have ' + attemptsHolidays + '  attempts left.');
      console.log('The user guessed ' + answer7 + ' and has ' + (attemptsHolidays) + ' attempt(s) left.');
    }
    alert('My favorite holidays are:\n' + myHolidays + '\n' + user + ' , you scored ' + userPoints + ' out of 7 points.');
    console.log('After question 7 the user has ' + userPoints + ' point(s).');
  }
}
questionSeven();
