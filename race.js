function race(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve, reject);
    });
  });
}

function some(promises, count) {
  return new Promise(async (resolve, reject) => {
    const results = [];
    let resolvedCount = 0;

    function handlePromise(promise, index) {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          resolvedCount++;

          resolvedCount === count
            ? resolve(results.filter((x) => x !== false))
            : null;
        })
        .catch((error) => {
          reject({ index, error });
        });
    }

    count === 0 || promises.length === 0
      ? resolve([])
      : promises.forEach((promise, index) => {
          handlePromise(promise, index);
        });
  });
}

// Example usage:
console.log(await some([], 10));
