// write a function that inserts an element into a list only if the element 
// to be inserted is larger than any of the elements currently in the list

function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];

  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.appendIfLarger = appendIfLarger;
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
  this.displayPeople = displayPeople;
}

// displayPeople: print people based on gender
function displayPeople(gender = 'M') {
  if (gender === 'M' || gender === 'F') {
    console.log(this.toString().filter(person => person.gender === gender))
  }
}

// append: adding an element to a list
function appendIfLarger(element) {
  const larger = this.dataStore.every((el) => element > el);

  if (larger) {
    this.dataStore[this.listSize++] = element;
    return true; // did append element
  }

  return false; // did not append element
}

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



// to use
let names = new List();
names.append('Cynthia');
names.append('Raymond');
names.append('Barbara');



// iterating through a list
for (names.front(); names.currPos() < names.length(); names.next()) {
  console.log(names.getElement());
}

for (names.end(); names.currPos() >= 0; names.prev()) {
  console.log(names.getElement());

  if (names.currPos() === 0) {
    break;
  }
}








// ---------------------------------------------------------------------
// create a Person class that stores a person's name and their gender.
// create a list of at least 10 Person objects.
// write a function that displays all the people in the list of the same gender.

const Person = function(name, gender) {
  this.name = name;
  this.gender = gender;
}

const people = new List();

people.append(new Person('Jack', 'M'));
people.append(new Person('Jill', 'F'));
people.append(new Person('Joe', 'M'));
people.append(new Person('Steve', 'M'));
people.append(new Person('Sarah', 'F'));
people.append(new Person('Carl', 'M'));
people.append(new Person('Misty', 'F'));
people.append(new Person('Joanne', 'F'));
people.append(new Person('Crystal', 'F'));
people.append(new Person('Bob', 'M'));
people.append(new Person('Bill', 'M'));

people.displayPeople('M');
people.displayPeople('F');
people.displayPeople();