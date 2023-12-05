function forEach(array, func) {
  array.map(function (element, index, array) {
    func(element, index, array);
  });
}
