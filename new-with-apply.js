function construct(Class) {
  let obj = Object.create(Class.prototype);
  Class.apply(obj, Array.prototype.slice.call(arguments, 1));
  return obj;
}
