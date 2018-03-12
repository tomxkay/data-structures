function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];

  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.front = front;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.length = length;
  this.contains = contains;
}

function append(element) {
  this.dataStore[this.listSize++] = element;
}

function find(element) {
  for (let i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] === element) {
      return i;
    }
  }

  return -1;
}

// the remove() function uses the position returned by find() to splice the dataStore array at that place.
function remove(element) {
  let foundAt = this.find(element);

  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize; // update size of list
    return true;
  }
  
  return false;
}

function length() {
  return this.listSize;
}

function toString() {
  return this.dataStore; // returns an array, providing a view of the current state of an object
}

function insert(element, after) {
  let insertPos = this.find(after);
  if (insertPos > -1) {
    this.dataStore.splice(insertPos+1, 0, element);
    ++this.listSize;
    return true;
  }

  return false;
}

function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

function contains(element) {
  for (let i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] === element) {
      return true;
    }
  }

  return false;
}

// TRAVERSING A LIST
function front() {
  this.pos = 0;
}

function end() {
  this.pos = this.listSize - 1;
}

function prev() {
  if (this.pos > 0) {
    --this.pos;
  }
}

function next() {
  if (this.pos < this.listSize -1) {
    ++this.pos;
  }
}

function currPos() {
  return this.pos;
}

function moveTo(position) {
  this.pos = position;
}

function getElement() {
  return this.dataStore[this.pos];
}







// to use
let names = new List();
names.append('Cynthia');
names.append('Raymond');
names.append('Barbara');
console.log(names.toString());
names.remove('Raymond');
console.log(names.toString());

