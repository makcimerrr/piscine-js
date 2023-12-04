function format(date, formatStr) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();
  const dayOfWeek = date.getDay();

  let formattedDate = "";
  let currentChar;
  let nextChar;
  let count;

  for (let i = 0; i < formatStr.length; i++) {
    currentChar = formatStr[i];
    nextChar = formatStr[i + 1];
    count = 1;

    while (currentChar === nextChar && i < formatStr.length - 1) {
      count++;
      i++;
      nextChar = formatStr[i + 1];
    }

    switch (currentChar) {
      case "y":
        if (count === 2) {
          formattedDate += (year % 100).toString().padStart(2, "0");
        } else {
          formattedDate += year.toString();
        }
        break;
      case "M":
        if (count === 2) {
          formattedDate += month.toString().padStart(2, "0");
        } else if (count === 3) {
          formattedDate += getMonthShortName(month);
        } else {
          formattedDate += getMonthFullName(month);
        }
        break;
      case "d":
        formattedDate += day.toString().padStart(2, "0");
        break;
      case "E":
        if (count === 3) {
          formattedDate += getDayShortName(dayOfWeek);
        } else {
          formattedDate += getDayFullName(dayOfWeek);
        }
        break;
      case "h":
        formattedDate += (hours % 12 || 12).toString().padStart(2, "0");
        break;
      case "H":
        formattedDate += hours.toString().padStart(2, "0");
        break;
      case "m":
        formattedDate += minutes.toString().padStart(2, "0");
        break;
      case "s":
        formattedDate += seconds.toString().padStart(2, "0");
        break;
      case "S":
        formattedDate += milliseconds.toString().padStart(3, "0");
        break;
      case "a":
        formattedDate += hours < 12 ? "AM" : "PM";
        break;
      default:
        formattedDate += currentChar;
        break;
    }
  }

  return formattedDate;
}

function getMonthShortName(month) {
  const monthNames = [
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
  return monthNames[month - 1];
}

function getMonthFullName(month) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthNames[month - 1];
}

function getDayShortName(dayOfWeek) {
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return dayNames[dayOfWeek];
}

function getDayFullName(dayOfWeek) {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return dayNames[dayOfWeek];
}

const d = new Date("7 January 1985, 3:08:19");

console.log(format(d, "HH(mm)ss [dd] <MMM>")); // -> '03(08)19 [07] <Jan>'
