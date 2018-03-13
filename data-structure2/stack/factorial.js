const Stack = require('./stack');

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
}



// simulating recursive processes using a stack
function fact(n) {
  const s = new Stack();

  while (n > 1) {
    s.push(n--);
  }

  let product = 1;
  while (s.length() > 0) {
    product *= s.pop();
  }

  return product;
}




console.log(factorial(5)); // 120

console.log(fact(5)); // 120

