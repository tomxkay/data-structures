// similar to stacks but approaches a LIFO (Last In First Out) order.

function Queue() {
  let items = [];

  // add an element to the end of the queue
  this.enqueue = function(element) {
    items.push(element);
  };

  // removes the oldest item added.
  this.dequeue = function() {
    return items.shift();
  };

  // returns the front/oldest element
  this.front = function() {
    return items[0];
  };

  // verifying if the queue is empty
  this.isEmpty = function() {
    return items.length === 0;
  };

  // returns size of queue
  this.size = function() {
    return items.length;
  }

  // logging the elements of the queue
  this.print = function() {
    console.log(items.toString());
  };
}


// to use
const queue = new Queue();

console.log(queue.isEmpty());
queue.enqueue('john');
queue.enqueue('jack');
queue.enqueue('thomas');
queue.print();
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
queue.print();

