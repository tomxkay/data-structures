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

  this.subset = function(otherSet) {
    // if the set is larger the the otherSet, it is not possible to be subset of that other set.
    if (this.size() > otherSet.size()) {
      return false;
    } else {
      let values = this.values();
      for (let i=0; i<values.length; i++) {
        if (!otherSet.has(values[i])) {
          return false;
        }
      }

      return true; // A is subset of B if B is larger than A and contains all values that A contains.
    }
  };
}

let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
// setA.add(8);
// setA.add(9);
// setA.add(6);

let setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

let setC = new Set();
setC.add(1);
setC.add(2);

let setD = new Set();
setD.add(1);
setD.add(2);
setD.add(3);

let subsetAB = setA.subset(setB);
console.log(subsetAB);

let subsetCD = setC.subset(setD);
console.log(subsetCD);
