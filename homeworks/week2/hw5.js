function join(str, concatStr) {
  let tmpStr = '';
  let i = 0;
  for (i; i < str.length; i += 1) {
    if (i === str.length - 1) {
      tmpStr += str[i];
    } else {
      tmpStr += str[i] + concatStr;
    }
  }
  return tmpStr;
}

function repeat(str, times) {
  let repeatStr = str;
  let i = 1;
  for (i; i < times; i += 1) {
    repeatStr += str;
  }
  return repeatStr;
}
console.log(join(['a', 1, 'b', 2, 'c', 3], '!!!'));
console.log(repeat('a', 5));
