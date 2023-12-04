function isValid(date) {
  return date instanceof Date && !isNaN(date);
}

function isAfter(date1, date2) {
  if (isValid(date1) && isValid(date2)) {
    return date1 > date2;
  }
  return false;
}

function isBefore(date1, date2) {
  if (isValid(date1) && isValid(date2)) {
    return date1 < date2;
  }
  return false;
}

function isFuture(date) {
  if (isValid(date)) {
    return date > new Date();
  }
  return false;
}

function isFuture(date) {
  if (isValid(date)) {
    return date < new Date();
  }
  return false;
}
