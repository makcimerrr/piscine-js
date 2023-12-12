function deepCopy(input) {
  var output;

  function isAnObject(input) {
    return (
      typeof input === "object" &&
      !(typeof input === "function") &&
      !Array.isArray(input) &&
      input !== null &&
      !(input instanceof RegExp)
    );
  }
  switch (true) {
    case Array.isArray(input):
      output = [];
      for (var i = 0; i < input.length; i++) {
        output[i] = deepCopy(input[i]);
      }
      break;
    case isAnObject(input):
      output = {};
      for (var key in input) {
        output[key] = deepCopy(input[key]);
      }
      break;
    default:
      output = input;
  }
  return output;
}
