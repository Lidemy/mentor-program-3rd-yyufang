function isPalindromes(str) {
  const strSplit = str.toString().split('');
  for (let i = 0; i < strSplit.length / 2; i += 1) {
    if (strSplit[i] !== strSplit[strSplit.length - i - 1]) {
      return false;
    }
  }
  return true;
}
module.exports = isPalindromes;
