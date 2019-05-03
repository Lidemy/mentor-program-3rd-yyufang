``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 執行第一行，對函式 isValid 輸入陣列 [3, 5, 8, 13, 22, 35]
2. 執行第二行至第四行，設定變數 i 為 0，如果陣列中第 i 個位置的值小於零，回傳 'invalid'，大於的話 i+1 繼續往下，直到 i 大於或等於陣列長度
>用途：檢查陣列中所有的值皆大於零
3. 執行第五行至第七行，設定變數 i 為 2，如果第 i 個位置不等於第 i-1 個位置和第 i-2 個位置的數值和，回傳 'invalid'，等於的話 i+1 繼續往下，直到 i 大於或等於陣列長度
>用途：檢查陣列中從第三個數值開始，該數值會等於前兩數值之和
4. 若整個函數執行到第九行，則表示陣列中所有的值皆大於零，且陣列中從第三個數值開始，該數值會等於前兩數值之和，回傳 'valid'
5. 回傳'invalid'，執行完畢