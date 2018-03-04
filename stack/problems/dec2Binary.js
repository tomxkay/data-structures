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

// Decimal to binary
function divideBy2(decNumber) {
  var remStack = new Stack(),
    rem,
    binaryString = "";
  while (decNumber > 0) {
    rem = Math.floor(decNumber % 2);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / 2);
  }
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }
  return binaryString;
}


console.log(divideBy2(10));
console.log(divideBy2(1000));


console.log(divideBy2(1));
console.log(divideBy2(2));
console.log(divideBy2(4));
console.log(divideBy2(8));
console.log(divideBy2(16));
console.log(divideBy2(32));
console.log(divideBy2(64));
console.log(divideBy2(128));