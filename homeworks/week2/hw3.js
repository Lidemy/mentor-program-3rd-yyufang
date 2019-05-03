function reverse(str) {
  const strSplit = str.split('');
  const tmpStr = [];
  for (let i = strSplit.length - 1; i >= 0; i -= 1) {
    tmpStr.push(strSplit[i]);
  }
  return tmpStr.join('');
}

console.log(reverse('yoyoyo'));
