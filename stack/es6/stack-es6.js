// the ES6 class syntax looks cleaner than the original but the variable items is public.
// the ES6 classes are prototype based.
// although a prototype-based class saves memory and escalates better than function-based classes, this approach does not allow us to declare private properties or methods.

class Stack {
  constructor() {
    this.items = [];
  }

  // add an item to the top/end of the stack
  push(element) {
    this.items.push(element);
  }

  // remove newest item and returns it.
  pop() {
    return this.items.pop();
  }

  // peek at the latest item added (from top of the stack)
  peek() {
    return this.items[items.length - 1];
  }

  // verifying if the stack is empty; -> t/f
  isEmpty() {
    return this.items.length === 0;
  }

  // return the size of the stack (its length)
  size() {
    return this.items.length;
  }

  // empty/clear the stack
  clear() {
    this.items = [];
  }

  // print the items from the stack in String format
  print() {
    console.log(this.items.toString());
  }
}
