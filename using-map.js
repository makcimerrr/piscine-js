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
    const temperature = parseInt(array.temperature.match(/\d+/)[0]); //regex pour les chiffres (digit)

    const temperatureCelsius = Math.floor((temperature - 32) / 1.8);

    const format = `${temperatureCelsius}°Celsius in ${array.city}, ${array.state}`;

    return format;
  });
}

console.log(
  tempForecasts([
    {
      city: "Pasadena",
      temperature: " 101 °F",
      state: "California",
      region: "West",
    },
  ])
);
