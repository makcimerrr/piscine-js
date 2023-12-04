function matchCron(cronString, date) {
  const [minutes, hours, dayOfMonth, month, dayOfWeek] = cronString.split(" ");

  // Match minutes
  if (minutes !== "*") {
    if (minutes !== date.getMinutes().toString()) {
      return false;
    }
  }

  // Match hours
  if (hours !== "*") {
    if (hours !== date.getHours().toString()) {
      return false;
    }
  }

  // Match day of month
  if (dayOfMonth !== "*") {
    if (dayOfMonth !== date.getDate().toString()) {
      return false;
    }
  }

  // Match month
  if (month !== "*") {
    if (month !== (date.getMonth() + 1).toString()) {
      return false;
    }
  }

  // Match day of week
  if (dayOfWeek !== "*") {
    if (dayOfWeek !== date.getDay().toString()) {
      return false;
    }
  }

  return true;
}
console.log(matchCron("9 * * * *", new Date("2020-05-30 18:09:00")));
