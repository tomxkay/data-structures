let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

let setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

let intersection = function(setA, setB) {
  let intersectionSet = new Set();
  for (let x of setA) {
    if (setB.has(x)) {
      intersectionSet.add(x);
    }
  }
  return intersectionSet;
}

let intersectionAB = intersection(setA, setB);

console.log(intersectionAB.values().next());