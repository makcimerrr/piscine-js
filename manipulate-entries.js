function filterEntries(entries, condition) {
  const result = {};
  for (const [key, value] of Object.entries(entries)) {
    if (condition([key, value])) {
      result[key] = value;
    }
  }
  return result;
}

function mapEntries(entries, transformation) {
  const result = {};
  for (const [key, value] of Object.entries(entries)) {
    const [newKey, newValue] = transformation([key, value]);
    result[newKey] = newValue;
  }
  return result;
}

function reduceEntries(entries, reducer, initialValue) {
  let accumulator = initialValue === undefined ? {} : initialValue;
  for (const [key, value] of Object.entries(entries)) {
    accumulator = reducer(accumulator, [key, value]);
  }
  return accumulator;
}

function totalCalories(cart) {
  let total = 0;
  for (const item in cart) {
    const grams = cart[item];
    const itemCalories = (nutritionDB[item]?.calories || 0) * (grams / 100);
    total += itemCalories;
  }
  return Math.round(total * 10) / 10;
}

function lowCarbs(cart) {
  const result = {};
  for (const item in cart) {
    const grams = cart[item];
    const itemCarbs = nutritionDB[item]?.carbs * grams || 0;
    if (itemCarbs < 5000) {
      result[item] = grams;
    }
  }
  return result;
}

function cartTotal(cart) {
  const result = {};
  for (const item in cart) {
    const grams = cart[item];
    const nutritionFacts = { ...nutritionDB[item] };
    for (const nutrient in nutritionFacts) {
      nutritionFacts[nutrient] =
        Math.round(((nutritionFacts[nutrient] * grams) / 100) * 1000) / 1000;
    }
    result[item] = nutritionFacts;
  }
  return result;
}
