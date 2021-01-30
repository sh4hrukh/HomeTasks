function isSantaClausable(obj) {
  return ["sayHoHoHo", "distributeGifts", "goDownTheChimney"].every(
    (functionName) => typeof obj[functionName] == "function"
  );
}
