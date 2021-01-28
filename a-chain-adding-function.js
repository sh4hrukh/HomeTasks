function add(n) {
  // Let the currying begin!
  let fn = (x) => add(n + x);
  fn.valueOf = () => n;
  return fn;
}
