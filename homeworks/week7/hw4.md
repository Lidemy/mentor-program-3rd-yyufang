## 什麼是 DOM？
DOM 的全稱為 Document Object Model，一個以樹狀模式來表示文件結構的模型，透過 Document 的定義讓程式可以與文件進行溝通及操作，在 HTML 中的每個元素皆可視為 DOM 樹狀中的一個節點，透過特定 JavaScript 語法讓程市可以對 HTML 的 DOM 進行存取或是改變型態等等。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
先從根節點開始往下傳遞，向下傳遞的階段叫作 capture phase，捕獲階段，傳遞到 target（執行動作的元素）上時為  target phase，事件再往上從子節點逆向傳回去根節點，此階段為 bubble phase，冒泡階段，簡言之就是：先補獲，在冒泡。另外要注意的是當事件傳到 target 本身時，沒有區分捕獲跟冒泡。

## 什麼是 event delegation，為什麼我們需要它？
```event delegation``` 事件代理，當需要對多個 DOM 元素加上相同的事件監聽，比起在 DOM 元素個別加上監聽事件，除了較費時繁瑣，在動態新增的時候也會遇到新增的元素並不會自動被加上監聽事件，此時事件傳遞機制的 bubbling 的特性就可以很好的被利用，只要在這些多個 DOM 元素的父節點上加上該監聽事件，則在底層的節點也會因為 bubbling 也被自動被加上監聽事件，這就是事件代理。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？

```e.stopPropagation``` 是取消事件傳遞，取消事件繼續往下傳遞。

<br>
以下方的例子做說明：

```
<!DOCTYPE html>
<html>
<body>
  <div id="one">
    <div id="two">
      <button id="three"/>
    </div>
  </div>
</body>
</html>
```
<br>
根據 DOM 的事件傳遞，點擊 btn 後，事件會由 div #one 開始往下補獲經過 div #two，到 target div #three 後再往上冒泡回 div #two，最後到 div #one，此時若在 div #one 的監聽事件中加入 e.stopPropagation()
<br>

```
const btn = document.getElementById('one');
btn.addEventListener('click', (e) => {
    e.stopPropagation()
})
```

<br>
此時依然點擊 btn ，會發現事件 div #one 會在補獲階段就停止了，並不會繼續往下再往上冒泡，因為把事件傳遞給取消了。
<br>

```e.preventDefault``` 是取消瀏覽器的預設行為

<br>
常見的例子就是阻止超連結的行為
<br>

```
<!DOCTYPE html>
<html>
<body>
  <div id="one">
    <div id="two">
      <a id="link" target="_blank" href="http://google.com">google.com</a>
    </div>
  </div>
</body>
</html>
```
<br>
設置取消預設行為
<br>

```
const link = document.getElementById('link');
link.addEventListener('click', (e) => {
  e.preventDefault();
  })
```
<br>
點擊超連結後會發現不會有開啟新分頁行為（預設行為）出現，因為用了 e.preventDefault() 阻止其發生。

> 簡言之，兩者基本上是獨立的關係，不會互相影響，一個是跟事件傳遞有關（e.preventDefault()），一個是和觸發瀏覽器行為有關（e.preventDefault()）
  

參考資料：[DOM 的事件傳遞機制：捕獲與冒泡](https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/)
