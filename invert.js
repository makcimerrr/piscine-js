function invert(obj) {
  const inverted = {};
  const keys = Object.getOwnPropertyNames(obj);

  for (let i = 0; i < keys.length; i++) {
    inverted[keys[i]] = 1 / obj[keys[i]];
  }

  return inverted;
}

var student = {
  name: "Jack",
  age: 18,
  std: 12,
  fees: 5000,
};

console.log(invert(student));
console.log(invert({ f: 5, __proto__: { d: 6 } }));
