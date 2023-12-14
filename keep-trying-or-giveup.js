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

function timeout(delay, callback) {
  return async function (...args) {
    const maPromesse = new Promise((resolve, reject) =>
      setTimeout(resolve, delay, Error("timeout"))
    );
    const func = new Promise((resolve) => resolve(callback(...args)));

    try {
      const result = await Promise.race([maPromesse, func]).then(
        (result) => result
      );
      return result;
    } catch (error) {
      throw error;
    }
  };
}
/*
const fail = (q) =>
  q.then(
    (v) => Promise.reject("should fail"),
    (e) => e.message
  );

const setup = {
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
console.log(await retry(0, setup.failNTimes(0))(setup.r));

console.log(await timeout(0, setup.delayed(0))(setup.r));

console.log(await fail(timeout(2, setup.delayed(4))(setup.r)), "timeout");
*/
