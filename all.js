function all(object) {
  // Convert object to an array of key-value pairs
  const entries = Object.entries(object);

  // Initialize an empty object to store the resolved values
  const resolvedValues = {};

  // Create a promise that resolves when all values are resolved
  const promise = entries.reduce((accumulator, [key, value]) => {
    // Use the resolved value in the final object
    return accumulator.then(() => {
      // Return a new promise that resolves the value and updates the resolvedValues object
      return Promise.resolve(value).then((resolvedValue) => {
        resolvedValues[key] = resolvedValue;
      });
    });
  }, Promise.resolve());

  // Return a new promise that resolves with the final resolvedValues object
  return promise.then(() => resolvedValues);
}

// Example usage:
const promisesObject = {
  key1: Promise.resolve("value1"),
  key2: Promise.resolve("value2"),
  key3: Promise.resolve("value3"),
};

all(promisesObject)
  .then((resolvedValues) => {
    console.log(resolvedValues);
    // Output: { key1: 'value1', key2: 'value2', key3: 'value3' }
  })
  .catch((error) => {
    console.error(error);
  });
