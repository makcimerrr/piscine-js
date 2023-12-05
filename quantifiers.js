function every(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(arr[i])) {
      return false;
    }
  }
  return true;
}

function some(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(arr[i])) {
      return true;
    }
  }
  return false;
}

function none(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (!callback(arr[i])) {
        return false;
      }
    }
    return true;
  }