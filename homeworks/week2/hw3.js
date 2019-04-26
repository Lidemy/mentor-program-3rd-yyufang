function reverse(str) {
  const strSplit = str.split('');
  const tmpStr = [];
  let i = strSplit.length;
  for (i; i >= 0; i -= 1) {
    tmpStr.push(strSplit[i]);
  }
  return tmpStr.join('');
}

console.log(reverse('yoyoyo'));
