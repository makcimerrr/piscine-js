function map(array, callback) {
  const resultArray = [];
  for (let i = 0; i < array.length; i++) {
    const result = callback(array[i], i, array);
    resultArray.push(result);
  }
  return resultArray;
}

function flatMap(arr, callback) {
  const resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i], i, arr);
    resultArray.push(...(Array.isArray(result) ? result : [result]));
  }
  return resultArray;
}

const arr1 = [1, 2, 1];

const result = flatMap(arr1, (num) => (num === 2 ? [2, 2] : 1));

console.log(result);
