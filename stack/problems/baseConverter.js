// similar to dec2Binary.js; modified to work with any base.
const Stack = (function() {
  const items = new WeakMap();

  class Stack {
    constructor() {
      items.set(this, []);
    }
    push(element) {
      let s = items.get(this);
      s.push(element);
    }
    pop() {
      let s = items.get(this);
      let r = s.pop();
      return r;
    }
    peek() {
      let s = items.get(this);
      return s[items.length - 1];
    }
    isEmpty() {
      let s = items.get(this);
      return s.length === 0;
    }
    size() {
      let s = items.get(this);
      return s.length;
    }
    clear() {
      let s = items.get(this);
      s = [];
    }
    print() {
      let s = items.get(this);
      console.log(s.toString());
    }
  }

  return Stack; // return the class Stack
})();


function baseConverter(decNumber, base) {
  const remainderStack = new Stack();
  let remainder;
  let baseString = '';
  const digits = '0123456789ABCDEF';

  while (decNumber > 0) {
    remainder = Math.floor(decNumber % base); // modified line to work on any base
    remainderStack.push(remainder);
    decNumber = Math.floor(decNumber / base);
  }

  while (!remainderStack.isEmpty()) {
    baseString += digits[remainderStack.pop()]; // reference the digits string to reflect the correct remainer character
  }

  return baseString;
}

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 10));
console.log(baseConverter(100345, 16));