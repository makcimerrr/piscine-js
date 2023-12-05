function citiesOnly(array) {
  return array.map((obj) => obj.city);
}

console.log(
  citiesOnly([
    {
      city: "Los Angeles",
      temperature: "  101 °F   ",
    },
    {
      city: "San Francisco",
      temperature: " 84 ° F   ",
    },
  ])
);

function upperCasingStates(array) {
  return array.map((array) => {
    let words = array.split(" ");
    return words
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  });
}

console.log(upperCasingStates(["new york", "california"])); // ["New York", "California"]

function fahrenheitToCelsius(array) {
  return array.map((temp) => {
    let number = parseInt(temp, 10);
    let result = Math.floor((number - 32) / 1.8);
    return `${result}°C`;
  });
}

console.log(fahrenheitToCelsius(["68°F", "59°F", "25°F"])); // -> ['20°C', '15°C', '-4°C']

function trimTemp(array) {
  return array.map((obj) => {
    let newObj = { ...obj };
    newObj.temperature = newObj.temperature.trim().replace(/\s/g, ""); // regex pour enlever les espaces (space)
    return newObj;
  });
}

console.log(
  trimTemp([
    { city: "Los Angeles", temperature: "  101 °F   " },
    { city: "San Francisco", temperature: " 84 ° F   " },
  ])
);

function tempForecasts(array) {
  return array.map((array) => {
    //gère les températures
    const temperature = parseInt(array.temperature.match(/-?\d+/)[0]); //regex pour les chiffres (digit)
    console.log(temperature);
    const temperatureCelsius = Math.floor((temperature - 32) / 1.8);

    //gère les villes
    const state = array.state;
    const stateUpper = state
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    const format = `${temperatureCelsius}°Celsius in ${array.city}, ${stateUpper}`;

    return format;
  });
}

const states = [
  {
    city: "Los Angeles",
    temperature: "101 °F",
    state: "california",
    region: "West",
  },
  {
    city: "San Francisco",
    temperature: "84 °F",
    state: "california",
    region: "West",
  },
  {
    city: "Miami",
    temperature: " 112 °F",
    state: "Florida",
    region: "South",
  },
  {
    city: "New York City",
    temperature: " 0 °F",
    state: "new york",
    region: "North East",
  },
  { city: "Juneau", temperature: " 21° F", state: "Alaska", region: "West" },
  {
    city: "Boston",
    temperature: "45 °F",
    state: "massachussetts",
    region: "North East",
  },
  {
    city: "Jackson",
    temperature: " 70°F  ",
    state: "mississippi",
    region: "South",
  },
  {
    city: "Utqiagvik",
    temperature: " -1 °F",
    state: "Alaska",
    region: "West",
  },
  {
    city: "Albuquerque",
    temperature: " 95 °F",
    state: "new mexico",
    region: "West",
  },
];
console.log(tempForecasts(states));
