function adder(array, opt) {
  if (opt === undefined) {
    opt = 0;
  }
  return array.reduce((accumulator, number) => accumulator + number, opt);
}

const array1 = [1, 2, 3, 4];
console.log(adder(array1));

function sumOrMul(array, opt) {
  if (opt === undefined) {
    opt = 0;
  }
  return array.reduce((accumulator, number) => {
    return number % 2 === 0 ? accumulator * number : accumulator + number; // si modulo 2 donc paire sinon impair
  }, opt);
}

const numbersArray = [1, 2, 3, 5, 8];

console.log(sumOrMul(numbersArray, 5));

function funcExec(array, opt) {
  if (opt === undefined) {
    opt = 0;
  }
  return array.reduce((result, func) => func(result), opt);
}
