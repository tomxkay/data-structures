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
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.length = length;
  this.contains = contains;
}

// append: adding an elemen to a list
function append(element) {
  this.dataStore[this.listSize++] = element;
}

// find: finding an element in a list
function find(element) {
  for (let i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] === element) {
      return i;
    }
  }

  return -1;
}

// remove: removing an element from a list
// the remove() function uses the position returned by find() to splice the dataStore array at that place.
function remove(element) {
  var foundAt = this.find(element);

  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize; // update size of list
    return true;
  }
  
  return false;
}

// length: determining the number of elements in a list
function length() {
  return this.listSize;
}

// toString: retrieving a list's elements
function toString() {
  return this.dataStore; // returns an array, providing a view of the current state of an object
}

// insert: inserting an element into a list
function insert(element, after) {
  let insertPos = this.find(after);
  if (insertPos > -1) {
    this.dataStore.splice(insertPos+1, 0, element);
    ++this.listSize;
    return true;
  }

  return false;
}

// clear: removing all elements from a list
function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

// contains: determining if a given value is in a list
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
  if (this.pos < this.listSize) {          // not too sure if it should be              if (this.pos < this.listSize -1) {}
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


module.exports = List;






