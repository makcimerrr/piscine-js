/**
 * This function is used to debounce other functions. It returns a new function that can be used as a debounced version of the original function.
 * The new function will not execute until a specified delay has passed since the last time it was called.
 * This is useful in situations where a function is repeatedly called very frequently, such as when an event handler is attached to a scrolling element.
 * Debouncing can help reduce the number of times the function is executed, which can improve performance and make the code more efficient.
 *
 * @param {Function} func - The function to be debounced.
 * @param {number} delay - The delay, in milliseconds, after the last function call during which the debounced function should not be executed.
 * @returns {Function} - The debounced function.
 */
function debounce(func, wait = 0) {
  let timer;

  // The returned function will act as a debounced version of the original function.
  return function (...args) {
    // Clear the timer, if it exists.
    clearTimeout(timer);

    // Set a new timer to call the original function after the specified delay.
    timer = setTimeout(() => {
      func(...args);
    }, wait);
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
