function longWords(array) {
  const isHight5 = (currentValue) => currentValue.length >= 5;

  return array.every(isHight5);
}

function oneLongWord(array) {
  const even = (element) => element.length >= 10;

  return array.some(even);
}

function noLongWords(array) {
  const even = (element) => element.length >= 7;

  return !array.some(even);
}
