// A debounce function is used to delay the execution of a function until a certain time period has passed.
// This can be useful for reducing the number of times a function is executed, particularly in situations where it might be costly or not desirable to execute it multiple times in a short period.

// This is the basic debounce function.
// It takes a function (func), a time delay (wait), and an options object (options) as arguments.
// The options object can contain a leading property that, if true, will execute the function immediately the first time it is called and then wait for the delay before executing again.
function debounce(func, wait = 0, options = {}) {
  let timeout;
  let isImmediate = false;

  // If the options object has a leading property and it is true, then set isImmediate to true.
  if (options.leading) {
    isImmediate = true;
  }

  // Return a new function that can be used as a debounced version of the original function.
  return function () {
    const args = arguments;

    // Define a function that will be called later.
    // This function will reset the timeout and execute the original function if necessary.
    const later = function () {
      timeout = null;
      if (!isImmediate) {
        func.apply(this, args);
      }
    };

    // Determine if the function should be called immediately.
    const callNow = isImmediate && !timeout;

    // Clear the timeout.
    clearTimeout(timeout);

    // If the function should be called immediately, then execute it.
    // Otherwise, set a new timeout to call the later function.
    if (callNow) {
      func.apply(this, args);
    } else {
      timeout = setTimeout(later, wait);
    }
  };
}

// This is an alternative implementation of the debounce function.
// It takes the same arguments as the previous implementation: a function (func), a time delay (wait), and an options object (options).
// The options object can contain a leading property that, if true, will execute the function immediately the first time it is called and then wait for the delay before executing again.
function opDebounce(func, wait = 0, options = {}) {
  let timeout;
  let isImmediate = false;

  // If the options object has a leading property and it is true, then set isImmediate to true.
  if (options.leading) {
    isImmediate = true;
  }

  // Return a new function that can be used as a debounced version of the original function.
  return function (...args) {
    // If the options object has a leading property and the function is being called for the first time, then execute the original function immediately.
    if (options.leading && !timeout) {
      func(...args);
    }

    // Clear the timeout.
    clearTimeout(timeout);

    // Set a new timeout to call the original function after the specified delay.
    timeout = setTimeout(() => {
      timeout = null;
      if (!isImmediate) {
        func(...args);
      }
    }, wait);
  };
}
