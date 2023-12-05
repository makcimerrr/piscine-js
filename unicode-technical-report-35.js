function format(date, formatString) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const padZero = (num, length) => {
    const numString = String(num);
    return "0".repeat(Math.max(0, length - numString.length)) + numString;
  };

  function getFullYearString(year) {
    const absYear = Math.abs(year);
    if (absYear > 0 && absYear < 10) {
      return "000" + absYear;
    } else if (absYear > 9 && absYear < 100) {
      return "00" + absYear;
    } else if (absYear > 99 && absYear < 1000) {
      return "0" + absYear;
    }
    return String(absYear);
  }

  const formatOptions = {
    y:
      date.getFullYear() < 0
        ? Math.abs(date.getFullYear())
        : date.getFullYear(),
    yyyy: getFullYearString(date.getFullYear()),
    G: date.getFullYear() >= 1 ? "AD" : "BC",
    GGGG: date.getFullYear() >= 1 ? "Anno Domini" : "Before Christ",
    M: date.getMonth() + 1,
    MM: padZero(date.getMonth() + 1, 2),
    MMM: months[date.getMonth()],
    MMMM: months[date.getMonth()],
    d: date.getDate(),
    dd: padZero(date.getDate(), 2),
    E: daysOfWeek[date.getDay()],
    EEEE: daysOfWeek[date.getDay()],
    h: date.getHours() % 12 || 12,
    hh: padZero(date.getHours() % 12 || 12, 2),
    m: date.getMinutes(),
    mm: padZero(date.getMinutes(), 2),
    s: date.getSeconds(),
    ss: padZero(date.getSeconds(), 2),
    H: date.getHours(),
    HH: padZero(date.getHours(), 2),
    a: date.getHours() < 12 ? "AM" : "PM",
  };

  const regex = /y+|G+|M+|d+|E+|h+|m+|s+|H+|a+/g;

  return formatString.replace(regex, (match) => formatOptions[match]);
}

//EX
const d = new Date("7 January 1985, 3:08:19");
console.log(format(d, "HH(mm)ss [dd] <MMM>")); // -> '03(08)19 [07] <Jan>'
console.log(format(d, "M"));

const eclipse = new Date(-585, 4, 28);
console.log(format(eclipse, "yyyy"));
console.log(format(eclipse, "y"));
console.log(format(eclipse, "yyyy G"));
