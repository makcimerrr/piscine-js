function addWeek(date) {
  const week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "secondMonday",
    "secondTuesday",
    "secondWednesday",
    "secondThursday",
    "secondFriday",
    "secondSaturday",
    "secondSunday",
  ];
  const referenceDate = new Date("0001-01-01");
  const currentDate = new Date(date);
  const timeDifference = currentDate - referenceDate;
  const daysDifference = Math.floor(timeDifference / 86400000);
  return week[daysDifference % 14];
}

function timeTravel(date) {
  const newDate = new Date(date.date);
  newDate.setHours(date.hour);
  newDate.setMinutes(date.minute);
  newDate.setSeconds(date.second);
  return newDate;
}

console.log(addWeek("0001-01-01")); // Output: Monday
console.log(addWeek("0001-01-07")); // Output: Sunday
console.log(addWeek("0001-01-08")); // Output: secondMonday
console.log(addWeek("0001-01-09")); // Output: secondTuesday

console.log(
  timeTravel({
    date: new Date("2020-05-29 23:25:22"),
    hour: 21,
    minute: 22,
    second: 22,
  }).toString()
);
