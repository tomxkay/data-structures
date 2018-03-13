function Stack() {
  this.dataStore = [];
  this.top = 0; 
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.length = length;
  this.clear = clear;
}

function push(element) {
  this.dataStore[this.top++] = element;
}

function pop() {
  return this.dataStore[--this.top];
}

function peek() {
  return this.dataStore[this.top-1];
}

function length() {
  return this.top;
}

function clear() {
  this.top = 0; // clear the stack by setting the top variable back to 0;
}

module.exports = Stack;



// to use
// const s = new Stack();

// s.push('David');
// s.push('Raymond');
// s.push('Bryan');
// console.log('length: ' + s.length());
// console.log(s.peek());

// var popped = s.pop();
// console.log(`The popped element is ${popped}`);
// console.log(s.peek());
// s.push('Cynthia');
// console.log(s.peek());
// s.clear();
// console.log('length: ', s.length());
// console.log(s.peek());
// s.push('Clayton');
// console.log(s.peek());





















