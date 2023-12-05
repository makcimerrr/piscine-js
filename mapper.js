function map(array, callback) {
  const resultArray = [];
  for (let i = 0; i < array.length; i++) {
    const result = callback(array[i], i, array);
    resultArray.push(result);
  }
  return resultArray;
}

function customFlatMap(arr, callback) {
  const resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i], i, arr);
    resultArray.push(...result);
  }
  return resultArray;
}
