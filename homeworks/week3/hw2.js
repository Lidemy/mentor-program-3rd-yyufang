function alphaSwap(str) {
  const strSplit = str.split('');
  for (let i = 0; i < strSplit.length; i += 1) {
    if (strSplit[i] === strSplit[i].toUpperCase()) {
      strSplit[i] = strSplit[i].toLowerCase();
    } else {
      strSplit[i] = strSplit[i].toUpperCase();
    }
  }
  return strSplit.join('');
}

module.exports = alphaSwap;
