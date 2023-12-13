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

function opDebounce(func, wait, options = {}) {
  let timeout;
  let leadingExecuted = false;

  return function (...args) {
    const context = this;

    const execute = function () {
      timeout = null;
      func.apply(context, args);
      leadingExecuted = true;
    };

    const shouldExecute = !timeout;

    clearTimeout(timeout);

    if (options.leading && shouldExecute && !leadingExecuted) {
      execute();
    }

    timeout = setTimeout(() => {
      if (!options.leading || (options.trailing && shouldExecute)) {
        execute();
      }
      leadingExecuted = false;
    }, wait);
  };
}
