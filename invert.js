function invert(obj) {
  var retobj = {};
  for (var key in obj) {
    retobj[obj[key]] = key;
  }
  return retobj;
}

var student = {
  name: "Jack",
  age: 18,
  std: 12,
  fees: 5000,
};

console.log(inverse(student));
