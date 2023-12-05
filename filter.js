function filter(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

function reject(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

function partition(arr, callback) {
  const matching = [];
  const nonMatching = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      matching.push(arr[i]);
    } else {
      nonMatching.push(arr[i]);
    }
  }
  return [matching, nonMatching];
}
