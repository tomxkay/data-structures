// a deque is a queue-like structure that allows elements to be added and removed from 
// both the front and the back of the list.

function Deque() {
  this.dataStore = [];
  this.enqueueUnshift = enqueueUnshift;
  this.enqueuePush = enqueuePush;
  this.dequeuePop = dequeuePop;
  this.dequeueShift = dequeueShift;
  this.toString = toString;
  this.front = front;
  this.back = back;
  this.empty = empty;
}

// adds an element to the front of a queue
function enqueueUnshift(element) {
  this.dataStore.unshift(element);
}

// adds an element to the back of a queue
function enqueuePush(element) {
  this.dataStore.push(element);
}

// removes an element from the front of a queue
function dequeueShift() {
  return this.dataStore.shift();
}

function dequeuePop() {
  return this.dataStore.pop();
}

// examine the front and back of a queue
function front() {
  return this.dataStore[0];
}

function back() {
  return this.dataStore[this.dataStore.length -1];
}

// display all the elements in a queue
function toString() {
  let retStr = '';
  for (let i = 0; i < this.dataStore.length; i++) {
    retStr += this.dataStore[i] + '\n';
  }

  return retStr;
}

function empty() {
  return this.dataStore.length === 0 ? true : false;
}


module.exports = Deque;