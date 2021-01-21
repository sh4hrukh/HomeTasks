function countWords(str) {
  return (str.match(/([^\s]+)/g) || []).length;
}
