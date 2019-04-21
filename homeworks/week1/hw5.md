### 請解釋後端與前端的差異
前端：我們看得到的
>在瀏覽器上面看得到的東西，都算是前端的範疇，像是購物網站的頁面、Google 首頁......等等

後端：我們看不到的
>後端則是處理我們看不到的東西，像是在購物網站下訂幾個商品後，他會在後台建立你的訂單、計算金額、接收運送資訊，再把這些資訊傳遞到某些資料庫裡等等

### 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
<pre>
step 1：瀏覽器送出 request 給位在 Google DNS 上的 sever

step 2：位在 Google DNS 上的 sever 收到 request 

step 3：sever 去詢問資料庫，查詢關鍵字 JavaScript

step 4：資料庫查詢完畢後，將結果回報給 sever 

step 5：sever 回傳 response 給瀏覽器 

step 6：瀏覽器解析 response 的資訊並顯示出來
</pre>

### 請列舉出 3 個 command line 指令並且說明功用
>合併檔案（*.csv 表示所有 .csv 結尾的檔案）

`cat *.csv > 合併後的檔案名稱`

>取代字串

`LC_CTYPE=C sed -i '' 's/舊字串/新字串/g' 檔案名稱.csv`

>看資料行數

`wc -l 檔案名稱.csv`