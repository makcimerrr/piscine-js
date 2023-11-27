// Define escapeStr constant
const escapeStr = "`, \\, /, \" and \'";

// Define arr constant
const arr = [4, '2'];

// Define obj constant
const obj = Object.freeze({
  str: 'someString',
  num: 42,
  bool: true,
  undef: undefined,
  nested: Object.freeze({
    arr: Object.freeze([4, undefined, '2']),
    obj: Object.freeze({
      str: 'nestedString',
      num: 3.14,
      bool: false
    })
  })
});

// Freeze arr, nested, and obj
Object.freeze(arr);
Object.freeze(obj.nested);
Object.freeze(obj.nested.arr);
Object.freeze(obj.nested.obj);

// Testing if the constants are truly constant
// Uncommenting the next line should result in an error
// arr.push(5);

// Uncommenting the next line should result in an error
// obj.nested.str = 'newString';

// Uncommenting the next line should result in an error
// obj.nested.arr.push(5);

// Uncommenting the next line should result in an error
// obj.nested.obj.num = 42.5;

console.log(escapeStr);
console.log(arr);
console.log(obj);
