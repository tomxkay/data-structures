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

  this.union = function(otherSet) {
    let unionSet = new Set();

    let values = this.values(); // get the set array
    values.forEach(value => unionSet.add(value)); // add array set to unionSet

    values = otherSet.values(); // get the other set array
    values.forEach(value => unionSet.add(value)); // add other array set to unionSet

    return unionSet;
  }
}

let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

let setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

let unionAB = setA.union(setB);
console.log(unionAB.values());
