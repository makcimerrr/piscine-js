function currify(funcs) {
  return function (...args) {
    return funcs.reduce(function (result, func) {
      return [func(...result)];
    }, args)[0];
  };
}
