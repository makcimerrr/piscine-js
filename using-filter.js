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
    const isCapitalValid = obj.capital.length >= 8;
    const startsWithVowel = !vowels.includes(obj.name.toLowerCase().charAt(0));
    const hasVowelInTag = /[aeiou]/i.test(obj.tag);
    const isRegionValid = obj.region !== "South";

    return isCapitalValid && startsWithVowel && hasVowelInTag && isRegionValid;
  });
}

const countries = [
    { capital: 'Washington', name: 'USA', tag: 'Country', region: 'North' },
    { capital: 'Paris', name: 'France', tag: 'European', region: 'West' },
    { capital: 'Tokyo', name: 'Japan', tag: 'Asian', region: 'East' },
    { capital: 'Cape Town', name: 'South Africa', tag: 'African', region: 'South' },
  ];
  
  const filteredCountries = multiFilter(countries);
  console.log(filteredCountries);