function throttle(func, wait = 0) {
  let last = 0;
  return function (...args) {
    const now = +new Date();
    if (now - last > wait) {
      func(...args);
      last = now;
    }
  };
}

function opThrottle(func, wait = 0, options = {}) {
  let last = 0;
  let timer = null;

  let isImmediate = false;
  let isLast = false;

  if (options.leading) {
    isImmediate = true;
  }

  if (options.trailing) {
    isLast = true;
  }
  return function (...args) {
    const now = +new Date();
    if (!last && !isImmediate) {
      last = now;
    }
    if (now - last > wait) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      func(...args);
      last = now;
    } else if (!timer && isLast) {
      timer = setTimeout(() => {
        func(...args);
        last = +new Date();
        timer = null;
      }, wait);
    }
  };
}
