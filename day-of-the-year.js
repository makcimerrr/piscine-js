function dayOfTheYear(date) {
  let year = date.getFullYear();
  year =
    year < 10
      ? "000" + year
      : year < 100
      ? "00" + yyyy
      : year < 1000
      ? "0" + yyyy
      : year;
  const dateRef = new Date(`${year}-01-01`);
  const dateActuelle = date;
  const diff = dateActuelle - dateRef;
  const result = Math.floor(diff / 86400000);
  return result + 1;
}

console.log(dayOfTheYear(new Date("0001-01-01")));
