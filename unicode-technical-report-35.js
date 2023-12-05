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

  const padZero = (num) => (num < 10 ? "0" : "") + num;

  const formatOptions = {
    y: date.getFullYear(),
    yyyy: date.getFullYear(),
    G: "AD",
    GGGG: "Anno Domini",
    M: date.getMonth() + 1,
    MM: padZero(date.getMonth() + 1),
    MMM: months[date.getMonth()],
    MMMM: months[date.getMonth()],
    d: date.getDate(),
    dd: padZero(date.getDate()),
    E: daysOfWeek[date.getDay()],
    EEEE: daysOfWeek[date.getDay()],
    h: date.getHours() % 12 || 12,
    hh: padZero(date.getHours() % 12 || 12),
    m: date.getMinutes(),
    mm: padZero(date.getMinutes()),
    s: date.getSeconds(),
    ss: padZero(date.getSeconds()),
    H: date.getHours(),
    HH: padZero(date.getHours()),
    a: date.getHours() < 12 ? "AM" : "PM",
  };

  const regex = /y+|G+|M+|d+|E+|h+|m+|s+|H+|a+/g;

  return formatString.replace(regex, (match) => formatOptions[match]);
}
