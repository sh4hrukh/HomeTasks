Object.prototype.hash = function (string) {
  return string
    .split(".")
    .reduce((result = this, item) => (result = result[item]), this);
};
