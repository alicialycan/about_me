'use strict';

var userPoints = 0;

console.log('Hello!');
alert('Welcome to my guessing game!');

var user = prompt('What is your name?');
alert('Hi ' + user + '! I am so glad you want to play my game. I would like you to get to know me to see if I may be able to work for your dog walking business. Please answer the following 5 questions:');

var answer = prompt('Would I prefer to walk my dog in the mountains? Type yes or no').toLowerCase();
console.log(answer);

if (answer === 'yes' || answer === 'Y') {
userPoints++;
} else {
  alert('Wrong. I prefer the mountains to the city most of the time!');
}

alert('you have ' + userPoints + ' points.');

var answer = prompt('If I won an around the world free paid trip with my dog, would I travel via a plane? Type yes or no').toUpperCase();
console.log(answer);

if (answer === 'YES' || answer === 'Y') {
userPoints++;
} else {
  alert ('No, ' + user + 'I would actually prefer to sail with my dog and boyfriend, but do not worry, we would make sure the dog got lots of swimming in for exercise.');
}

alert ('you have ' + userPoints + ' points.');

var answer = prompt('Would I feed my dog storebought treats over homemade treats? Type yes or no').toLowerCase();
console.log(answer);

if (answer === 'no' || answer === 'N') {
  userPoints++;
} else {
  alert('Wrong again ' + user + '! I prefer to feed my dog homemade real food any day!');
}

alert('you have ' + userPoints + ' points.');

var answer = prompt('Do I seem like a yellow lab type of individual? Type yes or no').toUpperCase();
console.log(answer);

if (answer === 'YES' || answer === 'Y') {
  userPoints++;
} else {
  alert('I\'m worried about our dog walking friendship' + user + '. I love golden retrievers!');
}

alert('you have ' + userPoints + ' points.');

var answer = prompt('Last question ' + user + '! Would you say a dog is truly a man or woman\'s best friend? Type yes or no').toLowerCase();
console.log(answer);

if (answer === 'yes' || answer === 'Y') {
  userPoints++;
} else {
  alert('I won\'t argue with you there '+ user + '! However, I do beg to differ. Unfortunately, our values are too different, I don\'t think I will be able to work for you as a dog walker!');
}

alert('you have ' + userPoints + ' points.');
