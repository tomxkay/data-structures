// Priority queue implementation.
// elements are added and removed based on a priority.
// i.e. boarding line at the airport; hospital emergency department;

function PriorityQueue() {
  let items = [];

  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = function(element, priority) {
    let queueElement = new QueueElement(element, priority);

    let added = false;
    for (let i=0; i<items.length; i++) { // use a for loop rather than the forEach method to enable breaking out of the loop.
      if (queueElement.priority < items[i].priority) {
        items.splice(i, 0, queueElement); // add element to queue according to priority.
        added = true;
        break;
      }
    }

    if (!added) {
      items.push(queueElement); // if of higher priority than the rest of the elements in queue, add to first/front of the queue
    }
  };

  this.print = function() {
    items.forEach((element) => {
      console.log(element.element, '-', element.priority);
    })
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
}




const queue = new PriorityQueue();

console.log(queue.isEmpty());
queue.enqueue('john', 1);
queue.enqueue('jack', 3);
queue.enqueue('thomas', 7);
queue.enqueue('cat', 0);
queue.print();
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
queue.print();

