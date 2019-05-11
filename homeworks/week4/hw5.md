## 請以自己的話解釋 API 是什麼
一個用來交換資料的介面，透過該介面，提供資料的一方可以選擇該 API 要提供什麼樣的資料給存取資料的一方，同樣的存取資料的一方透過 API 可以知道並從提供資料的一方取得資料。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

1. 401 Unauthorized
> 沒有某些通過驗證而被伺服器拒絕存取，這次的 hw4 作業中如果沒有輸入 Client-ID 或是輸入錯誤就會出現這個狀態碼，表示身份驗證未通過，無法存取資料。

2. 403 Forbidden
> 已經通過身份驗證，但使用者身份沒有訪問的權限。

3. 201 Created
> 請求已被實現，而且依據請求已經建立一個新的資源。hw3 的新增書目，若成功新增會跳出 201 的狀態碼，再看資料內容也可以看見該筆新增書目出現（建立一個新的資源）。

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

Base URL：https://foodie-eat-pray-love.herokuapp.com

說明           | Method | Path             | Parameters                    | Example
---------------|:------|:-----------------|:-------------------------------|--------------
回傳所有餐廳資料 | GET    | /restaurants     | _limit:限制回傳資料數量          | /books?_limit=3
回傳單一餐廳資料 | GET    | /restaurants/:id | 無                             | /restaurants/1
刪除餐廳        | DELETE | /restaurants/:id | 無                             | 無   
新增餐廳        | POST   | /restaurants/:id | name:餐廳名稱, address:餐廳地址  | 無 
更改餐廳        | PATCH  | /restaurants/:id | name:餐廳名稱, address:餐廳地址  | 無 
