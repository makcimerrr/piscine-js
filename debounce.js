function debounce(func, wait = 0, options = {}) {
  let timeout;
  let isImmediate = false;

  if (options.leading) {
    isImmediate = true;
  }

  return function () {
    const context = this;
    const args = arguments;

    const later = function () {
      timeout = null;
      if (!isImmediate) {
        func.apply(context, args);
      }
    };

    const callNow = isImmediate && !timeout;

    clearTimeout(timeout);
    if (callNow) {
      func.apply(context, args);
    } else {
      timeout = setTimeout(later, wait);
    }
  };
}

function opDebounce(func, wait = 0, options = {}) {
  let timeout;
  let isImmediate = false;

  if (options.leading) {
    isImmediate = true;
  }

  return function () {
    const context = this;
    const args = arguments;

    const later = function () {
      timeout = null;
      if (!isImmediate) {
        func.apply(context, args);
      }
    };

    const callNow = isImmediate && !timeout;

    clearTimeout(timeout);
    if (callNow) {
      func.apply(context, args);
    } else {
      timeout = setTimeout(later, wait);
    }
  };
}
