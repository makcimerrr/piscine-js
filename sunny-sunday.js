function sunnySunday(date) {
  const week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const referenceDate = new Date("0001-01-01");
  const currentDate = new Date(date);
  const timeDifference = currentDate - referenceDate;
  const daysDifference = Math.floor(timeDifference / 86400000);
  return week[daysDifference % 6];
}

console.log(sunnySunday("0001-01-01")); // Output: Monday
console.log(sunnySunday("0001-01-07")); // Output: Sunday
console.log(sunnySunday("0001-01-08")); // Output: secondMonday
console.log(sunnySunday("0001-01-09")); // Output: secondTuesday
