function all(promisesObject) {
  const keys = Object.keys(promisesObject);
  const results = {};

  function resolveSequentially(index) {
    if (index === keys.length) {
      return Promise.resolve(results);
    }

    const key = keys[index];
    const promise = promisesObject[key];

    return promise.then((value) => {
      results[key] = value;
      return resolveSequentially(index + 1);
    });
  }

  return resolveSequentially(0);
}
