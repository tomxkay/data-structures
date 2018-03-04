// [key, value]
// similar to a Set, store elements in an Object

// a map (dictionary) is similar to a set; a set stores [key, key] collections of elements,
// and a map stores a [key, value] collection of elements.

function Dictionary() {
  var items = {};

  // adds a new item to the dictionary
  this.set = function(key, value) {
    items[key] = value;
  };
  // removes the value from the dictionary using the key
  this.delete = function(key) {
    if (this.has(key)) {
      delete items[key];
      return true;
    }
    return false;
  };
  // returns true if the key exists in the dictionary, false otherwise
  this.has = function(key) {
    return key in items;
  };
  // returns a specific value searched by the key or undefined if they key does not exist.
  this.get = function(key) {
    return this.has(key) ? items[key] : undefined;
  };
  // removes all the items from the dictionary
  this.clear = function() {
    items = {};
  };
  // returns the size of the dictionary
  this.size = function() {
    return this.keys().length;
  };
  // returns an array of all the keys the dictionary contains
  this.keys = function() {
    return Object.keys(items);
  };
  // returns an array of all the values of the dictionary
  this.values = function() {
    const values = [];
    for (let k in items) {
      if (this.has(k)) {
        values.push(items[k]);
      }
    }
    return values;
  };



  // just verify the output of the items property.
  this.getItems = function() {
    return items;
  }
}



// to use
var dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'john@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');


console.log(dictionary.has('Gandalf'));
console.log(dictionary.size());

console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('Tyrion'));

dictionary.delete('John');
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('Tyrion'));
