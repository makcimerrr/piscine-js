function retry(count, callback) {
  return async function (...args) {
    try {
      return await callback(...args);
    } catch (error) {
      if (count > 0) {
        return retry(count - 1, callback)(...args);
      } else {
        throw error;
      }
    }
  };
}

/*const setup = {
  r: Math.random().toString(36).slice(2),
  failNTimes:
    (n) =>
    async (...v) =>
      --n < 0 ? v : Promise.reject(Error(`x:${v}`)),
  delayed:
    (delay) =>
    (...v) =>
      new Promise((s) => setTimeout(s, delay, v)),
};

console.log(retry(0, setup.failNTimes(0))(setup.r));*/
