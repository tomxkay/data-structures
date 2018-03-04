function Set() {
  let items = {};

  // adds a new item to the set; return true if added, false otherwise
  this.add = function(value) {
    if (!this.has(value)) {
      items[value] = value;
      return true;
    }
    return false;
  };
  // removes the value from the set; returns true if item deleted, false otherwise.
  this.delete = function(value) {
    if (this.has(value)) {
      delete items[value];
      return true;
    }
    return false;
  };
  // returns true if the value exists in the set and false otherwise
  this.has = function(value) {
    // return value in items;
    return items.hasOwnProperty(value);
  };
  // removes all the items from the set
  this.clear = function() {
    items = {};
  };
  // returns the number of elements the set contains
  this.size = function() {
    return Object.keys(items).length; // convert object to an array of keys and get the length
  };
  // returns an array of all the values of the set
  this.values = function() {
    let values = [];

    for (let key in items) {
      if (items.hasOwnProperty(key)) {
        values.push(items[key]);
      }
    }
    return values;
  };
}


// to use
let set = new Set()

set.add(1);
set.add(3);
set.add(5);
set.add(2);
set.add(4);
console.log(set.values());
console.log('size', set.size());
set.delete(4);
set.delete(3);
set.delete(2);
console.log(set.values());
console.log('size', set.size());
console.log(set.has(1));
set.clear();
console.log('size', set.size());
console.log(set.has(1));
