## hw1：好多星星
這題和之前的作業概念類似，所以很快就完成了，基本上沒遇到什麼問題。

## hw2：大小寫互換
這題和 week2 的首字大小寫轉換也一樣，只是這次變成對於整個字串都要轉換，等於是對於字串中每個字都做一次之前的大小寫轉換，引入回圈讓它自動做一樣的檢查及轉換就可以完成。

## hw3：判斷質數
這題不知道在寫的時候鬼打牆還是怎樣，一直答案錯誤，明明邏輯就是正確的也檢查了好幾次，最後才發現是最後一個 return 放錯 block 了...... 雖然是很捶心肝的錯誤，但也趁這個機會深深體會到了 return 的魔力（？）

## hw4：判斷迴文
這題在做的時候想法就很直觀的把整個字串反轉在比較與原字串是否相等，但在寫心得文的時候突然想到，好像可以有更簡潔的方法，其實只需要比較到轉折點之前的內容就好，可以節省一點時間，所以又做了改寫。

原始程式碼
```
function isPalindromes(str) {
  let strSplit = str.toString().split('');
  let tmpArr = [];
  for (var i = strSplit.length - 1; i > -1; i -= 1){
      tmpArr.push(strSplit[i])
  }
  if (str === tmpArr.join('')){
    return true
  }else{
    return false
  }
}
```

## hw5：大數加法
因為照著提示走本來很開心很快就解出來了，結果上傳到 OJ 上批改結果只有 50，然後自己在本機不管怎麼測都是正確答案，後來才想到少考慮了最後的進位，所以就隨機用了 9000 + 1000，測試，是錯誤的，果然測試的例子真的也是要好好想過，然後開沒開始進行加法的字串前處理，主要是想讓長度不一樣的字串可以自動補零成一樣長度，方便後續加法，看起來有點繁瑣，但還沒想到更好的替代方式。

前處理程式碼
```
const str1Split = str1.split('').map(x => parseInt(x));
    const str2Split = str2.split('').map(x => parseInt(x));
    const lengthDiff = str1Split.length - str2Split.length
    if (lengthDiff > 0){
        for(let i = 0; i < Math.abs(lengthDiff); i += 1){
            str2Split.unshift(0)
        }
    }
    if (lengthDiff < 0){
        for(let i = 0; i < Math.abs(lengthDiff); i += 1){
            str1Split.unshift(0)
        }
    }
```