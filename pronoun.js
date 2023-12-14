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

<<<<<<< HEAD
    for (const match of matches) {
      let followingWord = match[1].toLowerCase();

      pronouns.includes(followingWord) ? (followingWord = "") : null;

      pronounMap[pronoun].word.push(followingWord);
=======
>>>>>>> d9680d96728a8d2ec675da4b25ee304a331cf328
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

<<<<<<< HEAD
const example3 = "it i it she is gone";
const result3 = pronoun(example3);
console.log(result3);
=======
console.log(pronoun(`it i it she is gone`));
>>>>>>> d9680d96728a8d2ec675da4b25ee304a331cf328
