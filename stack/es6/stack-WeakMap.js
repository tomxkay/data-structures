// this approach ensures that the property will be private ina class.
// WeakMap can store key/value pair, where key is an object and the value can be any data type.

// enclose/encapsulate the Stack class with a closure so the WeakMap has scope only inside the function
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




// to use
const stack = new Stack();

stack.push(5);
stack.push(7);
stack.print();
