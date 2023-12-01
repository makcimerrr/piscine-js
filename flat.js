function flat(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flat(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result.length === 0 ? [] : [result[result.length - 1]];
}
console.log(flat([1, [2, [3]]]));
