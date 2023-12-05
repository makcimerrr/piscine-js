function hasCity(country, array) {
  const citySet = new Set(array); // n'ajoute pas la valeur si deja présente
  function checkCity(city) {
    if (citySet.has(city)) {
      return `${city} is a city from ${country}`;
    } else {
      return `${city} is not a city from ${country}`;
    }
  }

  return checkCity;
}

isChinese = hasCity("China", [
  "Beijing",
  "Shanghai",
  "Wuhan",
  "Shenzhen",
  "Tianjin",
  "Chengdu",
]);

console.log(isChinese("Beijing"));

console.log(isChinese("London"));
