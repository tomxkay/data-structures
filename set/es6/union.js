let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

let setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

let unionAb = new Set();
for (let x of setA) unionAb.add(x);
for (let x of setB) unionAb.add(x);