function debounce(func, wait) {
  let timeout;

  return function (...args) {
    const context = this;

    const later = function () {
      timeout = null;
      func.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function debounce(func, wait, options = { leading: false }) {
  let timeout;

  return function (...args) {
    const context = this;

    const execute = function () {
      timeout = null;
      func.apply(context, args);
    };

    const shouldExecute = options.leading && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(execute, wait);

    if (shouldExecute) {
      func.apply(context, args);
    }
  };
}
