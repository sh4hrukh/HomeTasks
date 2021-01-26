function createFunctions(n) {
  var callbacks = [];

  for (var i = 0; i < n; i++) {
    let currentValue = i;
    callbacks.push(function () {
      return currentValue;
    });
  }

  return callbacks;
}
