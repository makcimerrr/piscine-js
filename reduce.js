function fold(array, callback, accumulator) {
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }
  return accumulator;
}

function foldRight(array, callback, accumulator) {
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(array[i], accumulator);
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
function reduceRight(array, callback) {
  if (array.length < 1) {
    throw new Error("Array must have at least one element");
  }
  let accumulator = array[0];
  for (let i = 1; i < array.length; i++) {
    accumulator = callback(array[i], accumulator);
  }
  return accumulator;
}

const adder2 = (a, b) => a + b;
console.log(fold([1, 2, 3], adder2, 2));
console.log(foldRight([1, 2, 3], adder2, 2));
console.log(reduce([1, 2, 3], adder2));
console.log(reduceRight([1, 2, 3], adder2));
