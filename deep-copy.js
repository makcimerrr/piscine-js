function deepCopy(input) {
  var output;
  switch (true) {
    case Array.isArray(input):
      output = [];
      for (var i = 0; i < input.length; i++) {
        output[i] = deepCopy(input[i]);
      }
      break;
    case isDefenitelyAnObject(input):
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

function isDefenitelyAnObject(input) {
  return (
    typeof input === "object" &&
    !(typeof input === "function") &&
    !Array.isArray(input) &&
    input !== null &&
    !(input instanceof RegExp)
  );
}
