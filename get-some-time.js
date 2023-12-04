function firstDayWeek(number, string) {
  if (number <= 53 && number >= 1 && isValid(string)) {
    const startOfYear = new Date(string, 0, 1);
    console.log(startOfYear);
    const dayOfWeek = startOfYear.getDay();
    const firstDayOfYear = dayOfWeek === 0 ? 1 : 7 - dayOfWeek + 1;
    // détermine 1er jour de l'année en fonction du jour de la semaine donné (dayOfWeek)
    const daysUntilFirstDayOfWeek = (number - 1) * 7 + firstDayOfYear;
    const date = new Date(string, 0, daysUntilFirstDayOfWeek);

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  } else {
    return false;
  }
}

function isValid(date) {
  return date && !isNaN(date);
}

console.log(firstDayWeek(1, 2021));
