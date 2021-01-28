function compose(...functions) {
  return function (n) {
    functions.reverse().forEach((fn) => (n = fn(n)));
    return n;
  };
}
