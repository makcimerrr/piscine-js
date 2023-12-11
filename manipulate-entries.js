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

// small database with nutrition facts, per 100 grams
// prettier-ignore
const nutritionDB = {
    tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
    vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
    oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
    onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
    garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
    paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
    sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
    orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
  }

const groceriesCart = { orange: 500, oil: 20, sugar: 480 };

console.log("Total calories:");
console.log(totalCalories(groceriesCart));
console.log("Items with low carbs:");
console.log(lowCarbs(groceriesCart));
console.log("Total cart nutritional facts:");
console.log(cartTotal(groceriesCart));
