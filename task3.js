function greatestCommonDivisor(a, b) {
  if (!b) {
    return a;
  }

  return greatestCommonDivisor(b, a % b);
}

console.log(greatestCommonDivisor(process.argv[2], process.argv[3]));