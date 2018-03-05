// a better hash code generator than the loseloseHashCode function.
// one of the most highly recommended hash functions by the community.

const djb2HashCode = function(key) {
  var hash = 5381;
  for (let i = 0; i < key.length; i++) {
    hash = hash * 33 + key.charCodeAt(i);
  }
  return hash % 1013;
};

const djb2HashCode2 = key => {
  var hash = 5381;

  key.split("").forEach(el => {
    hash = hash * 33 + el.charCodeAt(0);
  });
  return hash % 1013;
};

const djb2HashCode3 = key => {
  var hash = 5381;

  key
    .split("")
    .map(el => el.charCodeAt(0))
    .forEach(el => (hash = hash * 33 + el));
  return hash % 1013;
};

console.log(djb2HashCode("asdfasdf"));
console.log(djb2HashCode2("asdfasdf"));
console.log(djb2HashCode3("asdfasdf"));
