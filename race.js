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

async function some(promises, count) {
  if (promises.length === 0 || count === 0) {
    return [];
  }

  let resolvedCount = 0;
  const resolvedValues = [];
  for (const promise of promises) {
    try {
      const result = await Promise.resolve(promise);
      resolvedValues.push(result);
      resolvedCount++;

      if (resolvedCount === count) {
        return resolvedValues;
      }
    } catch (error) {
      resolvedCount++;

      if (resolvedCount === count) {
        return resolvedValues;
      }
    }
  }

  return resolvedValues;
}

// Example usage:
console.log(await some([], 10));
