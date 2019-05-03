function stars(n) {
  const tmpArr = [];
  let tmpStr = '';
  for (let i = 0; i < n; i += 1) {
    tmpStr += '*';
    tmpArr.push(tmpStr);
  }
  return tmpArr;
}

module.exports = stars;
