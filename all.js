function all(object) {
  const entries = Object.entries(object);

  const resolvedValues = {};

  const promise = entries.reduce((accumulator, [key, value]) => {
    return accumulator.then(() => {
      return Promise.resolve(value).then((resolvedValue) => {
        resolvedValues[key] = resolvedValue;
      });
    });
  }, Promise.resolve());

  return promise.then(() => resolvedValues);
}
