## 交作業流程
### step1：新開一個 branch
`git branch [branch name]`

### step2：切換到新的 branch 下
`git checkout [branch name]`

### step3：寫完作業後更新 branch 中的版本 (僅列出最簡單的情況，更多 Git 的使用方法請參照下方 Git 參考資料)
`git commit -am [commit message]`

### step4：確認 branch 內檔案內容及版本無誤後，把 branch push 到 Github 上
`git push origin [branch name]`

### step5：到 Github 上點擊 Compare & pull request，輸入文件訊息後點擊 Create pull request
`base：master <- compare : [branch name]`

### step6：到「交作業專用 repo」的 repository，建立一個 new issue，標題規範及內容如下
<pre>
Title：[Week1] （[Week2]、[Week3]...... 以此類推）`
Leave a comment：貼上剛剛 Create pull request 後的網址</pre>

### step7：等老師改完作業後，把遠端 merge 完的 master pull 到本機（注意：若本來不在 master 內，要先 checkout 到 master）
`git pull origin master`

### step8：把 master pull 到本機後，刪除 branch
`git branch -d [branch name]`

##### Git 語法參考資料： Lidemy - ［Git101］Git 超新手入門 -> [點這裡進課程](https://www.lidemy.com/courses/enrolled/379441)