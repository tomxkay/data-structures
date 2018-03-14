const List = require('./list');

// to use
let names = new List();
names.append('Cynthia');
names.append('Raymond');
names.append('Barbara');



// iterating through a list
for (names.front(); names.currPos() < names.length(); names.next()) {
  console.log(names.getElement());
}

for (names.end(); names.currPos() >= 0; names.prev()) {
  console.log(names.getElement());

  if (names.currPos() === 0) {
    break;
  }
}