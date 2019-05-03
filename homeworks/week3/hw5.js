function add(a, b) {
  const aSplit = a.split('').map(x => parseInt(x, 10));
  const bSplit = b.split('').map(x => parseInt(x, 10));
  const lengthDiff = aSplit.length - bSplit.length;
  if (lengthDiff > 0) {
    for (let i = 0; i < Math.abs(lengthDiff); i += 1) {
      bSplit.unshift(0);
    }
  }
  if (lengthDiff < 0) {
    for (let i = 0; i < Math.abs(lengthDiff); i += 1) {
      aSplit.unshift(0);
    }
  }

  const ans = [];
  let plus = 0;
  for (let i = aSplit.length - 1; i >= 0; i -= 1) {
    const oriAdd = aSplit[i] + bSplit[i] + plus;
    ans.unshift(oriAdd % 10);
    plus = Math.floor(oriAdd / 10);
  }
  if (plus !== 0) {
    ans.unshift(plus);
  }
  return ans.join('');
}

module.exports = add;
