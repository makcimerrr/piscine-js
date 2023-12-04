function firstDayWeek(weekNumber, year) {
  let firstDayOfYear = new Date(`${year}-01-01`);
  let goodDate = firstDayOfYear;
  const firstDay = firstDayOfYear.getDay();
  const testFirstDay = (8 - firstDay) % 7;
  const firstMondayDate =
    firstDayOfYear.getTime() + testFirstDay * 24 * 60 * 60 * 1000;
  if (testFirstDay == 0) {
    weekNumber++;
  }
  const firstDayOfWeekSelected =
    firstMondayDate + (weekNumber - 2) * 7 * 24 * 60 * 60 * 1000;
  const calculatedDate = new Date(firstDayOfWeekSelected);
  if (calculatedDate > firstDayOfYear) {
    goodDate = calculatedDate;
  }

  // Format the date as dd-mm-yyyy
  let dd = String(goodDate.getDate()).padStart(2, "0");
  let mm = String(goodDate.getMonth() + 1).padStart(2, "0");
  let yyyy = goodDate.getFullYear();
  if (yyyy < 10) {
    yyyy = "000" + yyyy;
  }

  return `${dd}-${mm}-${yyyy}`;
}
// Example usage:
console.log(firstDayWeek(1, 1000)); // Output: "01-01-1000"
console.log(firstDayWeek(52, 1000)); // Output: "22-12-1000"
console.log(firstDayWeek(2, "0001"));
