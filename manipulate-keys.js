function filterKeys(obj, predicate) {
  return Object.keys(obj).reduce((acc, key) => {
    if (predicate(key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}

function mapKeys(obj, transform) {
  return Object.keys(obj).reduce((acc, key) => {
    const newKey = transform(key);
    acc[newKey] = obj[key];
    return acc;
  }, {});
}

function reduceKeys(obj, reducer, initialValue = "") {
  let acc = initialValue;
  let isFirst = true;

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (isFirst) {
        acc += key;
        isFirst = false;
      } else {
        acc = reducer(acc, key);
      }
    }
  }

  return acc;
}

const nutrients = { carbohydrates: 12, protein: 20, fat: 5 };

console.log(filterKeys(nutrients, (key) => /protein/.test(key)));
// output: { protein: 20 }

console.log(mapKeys(nutrients, (k) => `-${k}`));
// output: { -carbohydrates: 12, -protein: 20, -fat: 5 }

console.log(reduceKeys(nutrients, (acc, cr) => acc.concat(", ", cr)));
// output: carbohydrates, protein, fat
