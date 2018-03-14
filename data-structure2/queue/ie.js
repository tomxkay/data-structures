const Queue = require('./queue');

const q = new Queue();

q.enqueue('Meredith');
q.enqueue('Cynthia');
q.enqueue('Jeniffer');

console.log(q.toString());

q.dequeue();

console.log(`Front of queue: ${q.front()}`);
console.log(`Bront of queue: ${q.back()}`);