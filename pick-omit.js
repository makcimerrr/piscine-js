function pick(obj, keys) {
  if (typeof keys === "string") {
    keys = [keys];
  }

  const result = {};
  for (const key of keys) {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}

function omit(obj, keys) {
  if (typeof keys === "string") {
    keys = [keys];
  }

  const result = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && !keys.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
