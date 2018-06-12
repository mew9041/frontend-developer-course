function minShift(source, result) {
  if (source === result) return 0;

  const digits = source.split('');
  const leftShift = [...digits];
  const rightShift = [...digits];
  let i, j;

  for (i = 1; i <= digits.length; i++) {
    const firstDigit = leftShift.shift();
    leftShift.push(firstDigit);

    if (leftShift.join('') === result) {
      break;
    }
  }

  for (j = 1; j <= digits.length; j++) {
    const lastDigit = rightShift.pop();
    rightShift.unshift(lastDigit);

    if (rightShift.join('') === result) {
      break;
    }
  }

  if (i > digits.length || j > digits.length) {
    return -1;
  }

  if (i >= j) {
    return j;
  } else if (i < j) {
    return i;
  }
}

console.log(minShift(process.argv[2], process.argv[3]));