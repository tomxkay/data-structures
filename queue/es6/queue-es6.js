const Queue = (function() {
  const items = new WeakMap();

  class Queue {
    constructor() {
      items.set(this, []);
    }
    enqueue(element) {
      let q = items.get(this);
      q.push(element);
    }
    dequeue() {
      let q = items.get(this);
      let r = q.shift();
      return r;
    }
    front() {
      let q = items.get(this);
      return q[0];
    }
    isEmpty() {
      let q = items.get(this);
      return q === 0;
    }
    size() {
      let q = items.get(this);
      return q.length;
    }
    print() {
      let q = items.get(this);
      console.log(q.toString());
    }
  }

  return Queue;
})();



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
