function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}

// adds an element to the end of a queue
function enqueue(element) {
  this.dataStore.push(element);
}

// removes an element from the front of a queue
function dequeue() {
  return this.dataStore.shift();
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

module.exports = Queue;