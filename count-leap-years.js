function countLeapYears(date) {
  const year = date.getFullYear();
  const defaultYear = new Date("0001-01-01");
  const startYear = defaultYear.getFullYear();

  let numberOfLeapYear = 0;

  for (let i = startYear; i < year; i++) {
    if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {
      numberOfLeapYear = numberOfLeapYear + 1;
    }
  }
  return numberOfLeapYear;
}

console.log(countLeapYears(new Date("2048-12-08")));
console.log(countLeapYears(new Date("2048-12-08")));
