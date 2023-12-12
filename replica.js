function isAnObject(input) {
  return (
    typeof input === "object" &&
    !(typeof input === "function") &&
    !Array.isArray(input) &&
    input !== null &&
    !(input instanceof RegExp)
  );
}

function replica(target, ...sources) {
  sources.forEach((source) => {
    Object.keys(source).forEach((key) => {
      if (isAnObject(source[key])) {
        if (!target.hasOwnProperty(key) || !isAnObject(target[key])) {
          target[key] = {};
        }
        replica(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    });
  });
  return target;
}
