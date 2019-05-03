function isPrime(n) {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i <= n - 1; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = isPrime;
