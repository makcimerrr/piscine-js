function filterShortStateName(array) {
  return array.filter((word) => word.length < 7);
}

function filterStartVowel(array) {
  const vowels = ["a", "e", "i", "o", "u"];
  return array.filter((str) => {
    const firstLetter = str.toLowerCase().charAt(0);
    return vowels.includes(firstLetter);
  });
}

function filter5Vowels(array) {
  const vowels = ["a", "e", "i", "o", "u"];
  return array.filter((str) => {
    {
      const vowelsCount = str
        .toLowerCase()
        .split("")
        .filter((char) => vowels.includes(char)).length;
      return vowelsCount >= 5;
    }
  });
}

function filter1DistinctVowel(array) {
  const vowels = ["a", "e", "i", "o", "u"];
  return array.filter((str) => {
    const distinctVowels = new Set( // n'ajoute pas la valeur si deja présente, si différents de 1 donc plusieurs voyelles
      str
        .toLowerCase()
        .split("")
        .filter((char) => vowels.includes(char))
    );
    return distinctVowels.size === 1;
  });
}

const words = [
  "apple",
  "banana",
  "orange",
  "kiwi",
  "pear",
  "grape",
  "peach",
  "Alabama",
];

console.log(filter1DistinctVowel(words));

function multiFilter(objects) {
  const vowels = ["a", "e", "i", "o", "u"];
  return objects.filter((obj) => {
    const isCapitalValid = obj.capital.length >= 8; // Au moins 8 caractères
    const startsWithVowel = !vowels.includes(obj.name.toLowerCase().charAt(0)); //Ne commence pas par une voyelle
    const hasVowelInTag = /[aeiou]/i.test(obj.tag); // Regex : Match a single character present in the list below [aeiou]
    // A au moins une voyelle
    const isRegionValid = obj.region !== "South"; // Différent de South

    return isCapitalValid && startsWithVowel && hasVowelInTag && isRegionValid;
  });
}
