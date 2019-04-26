function capitalize(str) {
  const tmpStr = str.split('');
  tmpStr[0] = tmpStr[0].toUpperCase();
  return tmpStr.join('');
}

console.log(capitalize('hello'));
