function currify(funcs) {
  return function (...args) {
    return funcs.reduce(function (result, func) {
      return [func(...result)];
    }, args)[0];
  };
}
const mult2 = (el1, el2) => el1 * el2;
console.log(mult2(2, 2)); // result expected 4

const mult2Curried = currify(mult2);

console.log(mult2Curried(2)(2)); // result expected 4
// (same result, with a function that has technically only one argument)
