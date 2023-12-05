function currify(funcs) {
  return function curried(...args) {
    if (args.length >= funcs.length) {
      return funcs.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}
