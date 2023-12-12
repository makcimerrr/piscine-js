function pronoun(inputString) {
  const pronouns = ["i", "you", "he", "she", "it", "they", "we"];
  const pronounMap = {};

  pronouns.forEach((pronoun) => {
    const regex = new RegExp(`\\b${pronoun}\\s(\\w+)\\b`, "gi");
    const matches = inputString.matchAll(regex);

    pronounMap[pronoun] = {
      word: [],
      count: 0,
    };

    for (const match of matches) {
      pronounMap[pronoun].word.push(match[1]);
      pronounMap[pronoun].count++;
    }
  });

  // Remove empty entries
  Object.keys(pronounMap).forEach((key) => {
    if (pronounMap[key].word.length === 0) {
      delete pronounMap[key];
    }
  });

  return pronounMap;
}

// Example usage:
const example1 =
  "Using Array Destructuring, you you can iterate through objects easily.";
const result1 = pronoun(example1);
console.log(result1);

const example2 = "If he you want to buy something you have to pay.";
const result2 = pronoun(example2);
console.log(result2);
