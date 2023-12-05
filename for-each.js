function forEach(array, func) {
  array.map(function () {
    func(element, index, array);
  });
}
