// implementing palindrome using deque

const Deque = require('./deque');

function isPalindrome(str) {
  let reverseStr = new Deque();
  let normalStr = new Deque();

  for (let i = 0; i < str.length; ++i) {
    reverseStr.enqueueUnshift(str[i]);
    normalStr.enqueuePush(str[i]);
  }

  return reverseStr.toString() === normalStr.toString();


}

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('thomaskay')); // false