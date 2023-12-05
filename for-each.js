function forEach(array, func) {
  return array.map(function (element, index, array) {
    func(element, index, array);
  });
}
