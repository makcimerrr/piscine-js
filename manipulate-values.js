function filterValues(obj, callback) {
  const result = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && callback(obj[key], key, obj)) {
      result[key] = obj[key];
    }
  }
  return result;
}

function mapValues(obj, callback) {
  const resultObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const result = callback(obj[key], key, obj);
      resultObj[key] = result;
    }
  }
  return resultObj;
}

function reduceValues(obj, callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : 0;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      accumulator = callback(accumulator, obj[key], key, obj);
    }
  }
  return accumulator;
}

const nutrients = { carbohydrates: 12, protein: 20, fat: 5 };

console.log(filterValues(nutrients, (nutrient) => nutrient <= 12));
// output: { carbohydrates: 12, fat: 5 }

console.log(mapValues(nutrients, (v) => v + 1));
// output: { carbohydrates: 13, protein: 21, fat: 6 }

console.log(reduceValues(nutrients, (acc, cr) => acc + cr));
// output: 37
