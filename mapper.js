function map(array, callback) {
  const resultArray = [];
  for (let i = 0; i < array.length; i++) {
    const result = callback(array[i], i, array);
    resultArray.push(result);
  }
  return resultArray;
}

function flatMap(array, callback) {
  const resultArray = [];
  for (let i = 0; i < array.length; i++) {
    const result = callback(array[i], i, array);
    resultArray.push(...result);
  }
  return resultArray;
}
