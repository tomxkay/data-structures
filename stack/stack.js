function Stack() {
  let items = [];

  // add an item to the top/end of the stack
  this.push = function(element) {
    items.push(element);
  };

  // remove newest item and returns it.
  this.pop = function() {
    return items.pop();
  };

  // peek at the latest item added (from top of the stack)
  this.peek = function() {
    return items[items.length - 1];
  };

  // verifying if the stack is empty; -> t/f
  this.isEmpty = function() {
    return items.length === 0;
  };

  // return the size of the stack (its length)
  this.size = function() {
    return items.length;
  };

  // empty/clear the stack
  this.clear = function() {
    items = [];
  };

  // print the items from the stack in String format
  this.print = function() {
    console.log(items.toString());
  };
}

// to use
// let stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.print();


module.exports = Stack;

















// Stack constructor prototypal syntax
function StackProto() {
  let items = [];
}

// add an item to the top/end of the stack
StackProto.prototype.push = function(element) {
  this.items.push(element);
};

// remove newest item and returns it.
StackProto.prototype.pop = function() {
  return this.items.pop();
};

// peek at the latest item added (from top of the stack)
StackProto.prototype.peek = function() {
  return this.items[items.length - 1];
};

// verifying if the stack is empty; -> t/f
StackProto.prototype.isEmpty = function() {
  return this.items.length === 0;
};

// return the size of the stack (its length)
StackProto.prototype.size = function() {
  return this.items.length;
};

// empty/clear the stack
StackProto.prototype.clear = function() {
  this.items = [];
};

// print the items from the stack in String format
StackProto.prototype.print = function() {
  console.log(this.items.toString());
};
