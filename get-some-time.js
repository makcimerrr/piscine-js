function firstDayWeek(weekNumber, year) {
  // Convert input year to a number
  year = Number(year);

  // Check if the year is less than four digits
  if (isNaN(year) || year < 1000 || year > 9999) {
    return "Invalid year";
  }

  // Create a new Date object for January 1st of the specified year
  let firstDayOfYear = new Date(year, 0, 1);

  // Calculate the day of the week for January 1st
  let dayOfWeek = firstDayOfYear.getDay();

  // Calculate the offset to the first Monday of the week
  let offset = (dayOfWeek - 2 + 7) % 7;

  // Calculate the date of the first Monday of the week
  let firstMonday = new Date(firstDayOfYear);
  firstMonday.setDate(
    firstDayOfYear.getDate() + (1 - offset) + (weekNumber - 1) * 7
  );

  // Format the date as dd-mm-yyyy
  let dd = String(firstMonday.getDate()).padStart(2, "0");
  let mm = String(firstMonday.getMonth() + 1).padStart(2, "0");
  let yyyy = firstMonday.getFullYear();

  return `${dd}-${mm}-${yyyy}`;
}

// Example usage:
console.log(firstDayWeek(1, 1000)); // Output: "01-01-1000"
console.log(firstDayWeek(52, 1000)); // Output: "23-12-1000"
