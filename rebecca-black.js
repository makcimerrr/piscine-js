function isFriday(date) {
  let guess = date.getDay();
  if (guess == 5) return true;
  else return false;
}

function isWeekend(date) {
  let guess = date.getDay();
  if (guess == 6 || guess == 7) return true;
  else return false;
}

function isLeapYear(date) {
  let year = date.getFullYear();
  let daysInYear = 0;

  if (year % 4 === 0) {
    // Check if the year is a leap year
    if (year % 100 === 0) {
      // If the year is also divisible by 100
      if (year % 400 === 0) {
        // and it's divisible by 400
        daysInYear = 366; // Then it's a leap year
      } else {
        daysInYear = 365; // Otherwise, it's not a leap year
      }
    } else {
      daysInYear = 366; // If the year is divisible by 4 but not by 100, it's a leap year
    }
  } else {
    daysInYear = 365; // If the year is not divisible by 4, it's not a leap year
  }

  if (daysInYear == 366) return true;
  else return false;
}

function isLastDayOfMonth(date) {
  return (
    date.getDate() ==
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  );
}
console.log(isFriday(new Date(Date.now())));
console.log(isLeapYear(new Date("2023")));
