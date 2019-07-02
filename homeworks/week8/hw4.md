## 什麼是 Ajax？
Asychronous JavaScript And XML，非同步 JavaScript 及 XML，非同步和伺服器交換資料之 JavaScript 的一種統稱，與先前以 form 的方式的差別為，不需要重新載入網頁，就可以拿到請求的回應，此法是透過瀏覽器上的 JavaScript 來對伺服器發送請求。

## 用 Ajax 與我們用表單送出資料的差別在哪？

最明顯的差別為 Ajax 是透過 JavaScript 來發送請求，form 則是瀏覽器本身，Ajax 不需要重新載入網頁，就可以拿到請求的回應，form 會刷新頁面。

## JSONP 是什麼？
JSON with Padding，一種交換資料的方式，由於同源政策的限制，在不同網域上資料溝通上會有問題，而恰好在 html 中有些標籤是不會受到同源政策的限制，```<script>``` 就是其中一個，JSONP 就是利用這個元素，而可以透過 function 回傳回來的一個 JavaScript object 得到從其他來源動態產生的資料，Padding 則是代表會會在伺服器端做這個 JavaScript object 的填充，Client 端就可以透過 function 拿到資料。

## 要如何存取跨網域的 API？
利用跨來源資源共用（CORS，Cross-Origin Resource Sharing)的機制，在 response 裡面加上一個 header，Access-Control-Allow-Origin 的這個 header 就會加入可以存取 API 回應的使用者。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
因為跨網域的問題是只會出現在瀏覽器上面，現在是利用瀏覽器對伺服器發送請求，所以會有網域問題，而第四週是透過 node 在後端對伺服器發送請求，並沒有透過瀏覽器。

