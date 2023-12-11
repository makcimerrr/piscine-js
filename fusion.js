function fusion(obj1, obj2) {
  const result = {};
  for (let key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      if (typeof obj1[key] === "number" && typeof obj2[key] === "number") {
        result[key] = obj1[key] + obj2[key];
      } else if (Array.isArray(obj2[key])) {
        result[key] = obj1[key].concat(obj2[key]);
      } else if (typeof obj2[key] === "string") {
        result[key] = obj1[key].concat(" ", obj2[key]);
      } else if (typeof obj2[key] === "object" && !Array.isArray(obj2[key])) {
        result[key] = fusion(obj1[key], obj2[key]); // Recursive merge for objects
      } else {
        result[key] = obj2[key]; // Type mismatch, take value from obj2
      }
    } else {
      result[key] = obj1[key]; // Type not found obj, create one
    }
  }

  for (let key in obj2) {
    if (!result.hasOwnProperty(key)) {
      result[key] = obj2[key];
    }
  }

  return result;
}

console.log(fusion({ arr: [1, "2"] }, { arr: [2] }));
console.log(fusion({ str: "salem" }, { str: "alem" }));
console.log(fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 }));

console.log(
  fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } })
); // -> { a: 11, x: [], b: { c: 'Salem alem' } }
console.log(
  fusion(
    { a: { b: [3, 2], c: { d: 8 } } },
    { a: { b: [0, 3, 1], c: { d: 3 } } }
  )
); // -> { a: { b: [ 3, 2, 0, 3, 1 ], c: { d: 11 } } }

console.log(fusion({ a: "hello", b: [] }, { a: 4 })); // -> { a: 4, b: []
