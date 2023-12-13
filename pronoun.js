function pronoun(inputString) {
  const pronouns = ["i", "you", "he", "she", "it", "they", "we"];
  const pronounMap = {};

  pronouns.forEach((pronoun) => {
    const regex = new RegExp(`\\b${pronoun}\\b`, "gi");
    const matches = inputString.match(regex);
    let extractedWord = -1;

    for (
      let match = regex.exec(inputString);
      match !== null;
      match = regex.exec(inputString)
    ) {
      extractedWord = match.index;

      if (matches && matches.length > 0) {
        if (!pronounMap[pronoun]) {
          pronounMap[pronoun] = {
            word: [],
            count: 0,
          };
        }
      }

      pronounMap[pronoun].count++;

      const wordAfterPronoun = inputString
        .slice(extractedWord + pronoun.length + 1)
        .match(/\b(\w+)\b/);
      if (
        wordAfterPronoun &&
        !pronouns.some((pronoun) => wordAfterPronoun.includes(pronoun))
      ) {
        pronounMap[pronoun].word.push(wordAfterPronoun[1]);
      }
    }
  });

  return pronounMap;
}

const example1 =
  "Using Array Destructuring, you you can iterate through objects easily.";
const result1 = pronoun(example1);
console.log(result1);

const example2 = "If he you want to buy something you have to pay.";
const result2 = pronoun(example2);
console.log(result2);

console.log(pronoun(`it i it she is gone`));
