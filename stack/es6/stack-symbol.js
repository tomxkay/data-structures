// ES6 introduces a new primative type called Symbol that is immutable, and it can be uses as an object property.
// this approach provides a false class private property, b/c the method Object.getOwnPropertySymbols was introduced in ES6, 
// and it can be used to retrieve all the property Symbols declared in the class.


let _items = Symbol();

class Stack {
  constructor() {
    this[_items] = [];
  }

  // add an item to the top/end of the stack
  push(element) {
    this[_items].push(element);
  }

  // remove newest item and returns it.
  pop() {
    return this[_items].pop();
  }

  // peek at the latest item added (from top of the stack)
  peek() {
    return this[_items][items.length - 1];
  }

  // verifying if the stack is empty; -> t/f
  isEmpty() {
    return this[_items].length === 0;
  }

  // return the size of the stack (its length)
  size() {
    return this[_items].length;
  }

  // empty/clear the stack
  clear() {
    this[_items] = [];
  }

  // print the items from the stack in String format
  print() {
    console.log(this[_items].toString());
  }
}


// to use
let stack = new Stack();
stack.push(5);
stack.push(7);
let objectSymbols = Object.getOwnPropertySymbols(stack);
console.log(objectSymbols.length); // 1
console.log(objectSymbols); // [Symbol()]
console.log(objectSymbols[0]); // Symbol()
stack[objectSymbols[0]].push(1);
stack.print(); // outputs 5, 7, 1