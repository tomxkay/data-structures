const Stack = require('./stack');

function isPalindrome(word) {
  const s = new Stack();

  word.split('').forEach(letter => s.push(letter));

  let wordReversed = '';

  while(s.length() > 0) {
    wordReversed += s.pop();
  }

  return word === wordReversed ? true : false;
}





// demonstrate
const word = 'racecar';

if (isPalindrome(word)) {
  console.log(`${word} is a palindrome.`);
} else {
  console.log(`${word} is not a palindrome.`);
}
