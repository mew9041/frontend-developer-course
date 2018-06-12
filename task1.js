function lockFilter(word) {
  const arrOfSymbols = word.split('');

  function isWithoutSymbols(symbol) {
    return !['р', 'к', 'н'].includes(symbol.toLowerCase());
  }

  const arrOfFilteredSymbols = arrOfSymbols.filter(isWithoutSymbols);

  return arrOfFilteredSymbols.join('');
}

console.log(lockFilter(process.argv[2]));