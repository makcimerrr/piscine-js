function race(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

function some(promises, count) {
  return new Promise((resolve) => {
    if (promises.length === 0 || count === 0) {
      resolve(undefined);
      return;
    }

    let resolvedCount = 0;
    const resolvedValues = [];

    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((result) => {
          resolvedValues.push(result);
          resolvedCount++;

          if (resolvedCount === count) {
            resolve(resolvedValues);
          }
        })
        .catch(() => {
          resolvedCount++;

          if (resolvedCount === count) {
            resolve(resolvedValues);
          }
        });
    });
  });
}
