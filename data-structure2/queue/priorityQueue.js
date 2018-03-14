/*
  PRIORITY QUEUE

  a priority queue is one where elements are removed from the queue based on a priority constraint.

*/

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

// examine the front and back of a queue
function front() {
  return this.dataStore[0];
}

function back() {
  return this.dataStore[this.dataStore.length - 1];
}

function empty() {
  return this.dataStore.length === 0 ? true : false;
}

function dequeue() {
  let priority = this.dataStore[0].code;

  for (let i = 1; i < this.dataStore.length; ++i) {
    if (this.dataStore[i].code < priority) {
      // 1 has a higher priority than 5
      priority = i;
    }
  }

  return this.dataStore.splice(priority, 1);
}

function toString() {
  let retStr = "";
  for (let i = 0; i < this.dataStore.length; ++i) {
    retStr +=
      this.dataStore[i].name + " code: " + this.dataStore[i].code + "\n";
  }

  return retStr;
}

function Patient(name, code) {
  this.name = name;
  this.code = code; // the value for code represents severity/priority
}

var p = new Patient("Smith", 5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fedbach", 6);
ed.enqueue(p);
console.log(ed.toString());

var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString());
