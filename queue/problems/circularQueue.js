// Circular Queue
// i.e. Hot Potato game.
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

function hotPotato(nameList, num) {
  let queue = new Queue();

  nameList.forEach(name => queue.enqueue(name));

  let eliminated = '';
  while (queue.size() > 1) {
    for (let i=0; i<num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(eliminated + ' was eliminated from the Hot Potato game.');
  }

  return queue.dequeue(); // return the last remaining name
}

let names = ['john', 'jack', 'thom', 'carl'];
let winner = hotPotato(names, 7);
console.log(`The winner is ${winner}`);