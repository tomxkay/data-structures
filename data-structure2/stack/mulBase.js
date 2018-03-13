const Stack = require('./stack');

function mulBase(num, base) {
  const s = new Stack();

  do {
    s.push(num % base);
    num = Math.floor(num /= base);
  } while (num > 0);

  let converted = '';
  while (s.length() > 0) {
    converted += s.pop();
  }

  return converted;
}


console.log(mulBase(127, 8)); // 177