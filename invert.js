function invert(obj) {
  const newObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[obj[key]] = key;
    }
  }
  return newObj;
}

var student = {
  name: "Jack",
  age: 18,
  std: 12,
  fees: 5000,
};

console.log(invert(student));
console.log(invert({ f: 5, __proto__: { d: 6 } }));
console.log(invert({ language: "english" }), { english: "language" });
