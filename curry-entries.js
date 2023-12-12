function defaultCurry(target) {
  return (source) => {
    if (!Object.isFrozen(target) && !Object.isFrozen(source)) {
      return Object.assign(target, source);
    } else {
      return source;
    }
  };
}
function mapCurry(fn) {
  return function (obj) {
    const result = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        const [newKey, newValue] = fn([key, value]);
        result[newKey] = newValue;
      }
    }
    return result;
  };
}
function reduceCurry(fn) {
  return function (obj, initialValue) {
    let accumulator = initialValue === undefined ? {} : initialValue;
    for (const key in obj) {
      const value = obj[key];
      accumulator = fn(accumulator, [key, value]);
    }
    return accumulator;
  };
}
function filterCurry(fn) {
  return function (obj) {
    const result = {};
    for (const key in obj) {
      const value = obj[key];
      if (fn([key, value])) {
        result[key] = value;
      }
    }
    return result;
  };
}
function reduceScore(obj, initialValue) {
  return reduceCurry((acc, [k, person]) => {
    return person.isForceUser
      ? acc + person.pilotingScore + person.shootingScore
      : acc;
  })(obj, initialValue);
}
function filterForce(obj) {
  return filterCurry(([k, person]) => {
    return person.isForceUser && person.shootingScore >= 80;
  })(obj);
}
function mapAverage(obj) {
  return mapCurry(([k, person]) => {
    const averageScore = (person.pilotingScore + person.shootingScore) / 2;
    return [k, { ...person, averageScore }];
  })(obj);
}
console.log(
  defaultCurry(Object.freeze({ http: 403 }))(Object.freeze({ http: 200 }))
);
