function fold(array, callback, accumulator) {
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }
  return accumulator;
}

function foldRight(array, callback, accumulator) {
  for (let i = array.length - 1; i >= 0; i--) {
    accumulator = callback(accumulator, array[i]);
  }
  return accumulator;
}

function reduce(array, callback) {
  if (array.length < 1) {
    throw new Error("Array must have at least one element");
  }
  let accumulator = array[0];
  for (let i = 1; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }
  return accumulator;
}

function reduceRight(arr, func) {
  if (arr.length < 1) {
    throw new Error("Array must have at least one element");
  }

  let accumulator = arr[arr.length - 1];

  for (let i = arr.length - 2; i >= 0; i--) {
    accumulator = func(accumulator, arr[i]);
  }

  return accumulator;
}

const adder2 = (a, b) => a + b;
const concatenate2 = (a = "", b) => a.concat(b);
console.log(fold([1, 2, 3], adder2, 2));
console.log(foldRight([1, 2, 3], adder2, 2));
console.log(reduce([1, 2, 3], adder2));
console.log(reduceRight([1, 2, 3], adder2));
console.log(foldRight("examplesimple a is This ", concatenate2, "-> "));
