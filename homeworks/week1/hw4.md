## 跟你朋友介紹 Git

什麼是 Git？
===================
<pre>
Git 其實就是一個工具，一個拿來做版本控制的工具。
</pre>

為什麼需要版本控制，版本控制又是什麼呢？
===================
<pre>
其實版本控制你我在無形之中都有可能做過，像是今天在寫報告的時候，有時候會習慣去留存上一個原始檔案，在開始進行修正，這時可能就會把原始檔案複製一份，把原來的 report.doc 改命名為 report-new.doc，這種情況就是版本控制，每次的修正完成，我們就為他立一個新的版本，在覺得修正過後的版本有疑慮的時候，還可以回到修改前的原始檔去比對原先的內心是什麼，上面這個例子是一人在處理檔案的情況，對於處理這樣的版本控制還不會混亂到難以控制的情況，而當今天是團體需要共同完成專案的時候，可能就會出現一些些小問題，像是組員 A 和組員 B 都用一樣的方式，把他們各自更新過的檔案命名成 report-new.doc，這時就會產生一個問題，究竟這個檔案是誰改的，而哪個修正版本才是最後的版本呢？當然，可以用 report-new-A.doc 和 report-new-B.doc 這樣的命名來區分作者，但在檔案更新時間依然是難以判定，若又有組員 C 或更多組員時，這些掌控檔案的情況又會更加複雜，這時做有一個工具可以有系統的幫我們管理這些檔案版本，那就不用擔心上面人工進行版本控制會出現的問題了，而這個工具就是本次要介紹的 Git。
</pre>

用 Git 進行版本控制的簡單流程
====
Step 1 - 開始進行版本控制
---

>切換到要進行版本控制的目錄下（這裡為舉例說明)

`cd /User/xxx/Desktop/git-test`

>啟動版本控制  

`git init`

>啟動後可以查看目前 Git 的狀態  

`git status`

Step 2 - 修改過檔案之後，更新版本內容
---

>查看目前 Git 的狀態，發現所有被更動的檔案會被列出

`git status`

輸出

`Changes not staged for commit:`

`modified:   檔案名稱`

>此時可以選擇想要加入哪些檔案進入暫存區（Staged）

`git add 檔案名稱` 

或是選擇全部加入（.表示全部的意思）

`git add .` 

>查看目前 Git 的狀態，選擇的檔案會被移至暫存區

`git status`

輸出

`Changes to be committed:`

`modified:   檔案名稱`

>確認加入更新版本的檔案內容後，建立新版本

`git commit -m 版本訊息`

之後再用 `git status` 會發現 `Changes to be committed:` 內的列表會被清除

>如果想節省步驟 add 和 commit 是可以結合的喔

`git commit -am 版本訊息`

可以一次同時 add 和 commit 所有被修改過的檔案

其他小補充
---
### 1. 檢視歷史版本控制的資訊
> 完整資訊查看

`git log`

> 僅檢視前 7 碼版本號

`git log --oneline`


### 2. 回到歷史的版本
>切換到某特定的版本

`git checkout 版本號`

>切換到最新的狀態

`git checkout master`


### 3. 處理不需要加入版本控制的檔案

在 add 的階段，可能會遇到一些不需要加入版本控制的檔案，但每次都要在對他另外處理，就有點費神，此時就可以利用 .gitignore 的這個功能來設定不需要加入版本控制的檔案，之後就算對那些檔案進行更動，在 git 的狀態也不會顯示該檔案有被做過更動，使用方式如下：

>建立 .gitignore 檔案

`touch .gitignore`

>vim 開啟 .gitignore 編輯，輸入不需加入版本控制檔案名稱

`vim .gitignore`

Git 的 branch 是什麼？
====
為什麼需要 branch？
---
<pre>
可以避免在協同開發或是維護軟體時，開發其他新功能或修正 bug 的時候會互相產生衝突，可透過以不同工項在不同分支（branch）上進行修正或開發新功能，最後各經過測試確認後再結合到主線（master）上，在統一發布修正後且正確的版本。
</pre>
查看現在所有的 branch
---
`git branch -v`

開啟新 branch
---
`git branch 分支名稱`

刪除 branch
---
`git branch -d 分支名稱`

切換到其他的 branch
---
`git checkout 分支名稱`

合併 branch 
---
此語法的意思為，將此分支合併到現在所在的分支中

`git merge 欲合併的分支`

註：合併結束後通常會把該分支刪除，下一次須在開發或修正時再開一個新的 branch

合併時遇到衝突（conflict）怎麼辦？
---
當某一個檔案同個位置同時被修改成兩個版本，此時 git 就會跳出衝突警示，此時就以手動的方式開來修正檔案成正確的樣子（可以 vim 進行編輯），修正完畢後就可以 commit 了

Git 和 GitHub 傻傻分不清楚
====
每次聽到 Git 總是會伴隨 GitHub 出現，一定會很好奇他們究竟有什麼關係呢？還是他們是一樣的東西？答案是，關係是有的，但他們是不同的東西，Git 正如開頭所介紹的，是一個用來進行版本控制的工具，GitHub 則是一個可以拿來放 repository 的地方，所以我們可以只用 Git 而不用 GitHub，但用 GitHub 一定會使用 Git。

把本地 code 放到 GitHub 上
---
>建立一個 repository，然後在本地終端機中輸入（須確認現在的目錄及要放上去的版本分支）

`git remote add origin repository 的位置`

>在 push 到 master

`git -u push origin master`

把本地的改變更新到 GitHub 上
---
`git -u push origin master`

>push branch（須確認現在的目錄及要放上去的版本分支）

`git -u push origin 分支名稱`

把遠端的最新版本拉到本地
---
>建立一個 repository，然後在本地終端機中輸入（須確認現在的目錄及要放上去的版本分支）

`git -u pull origin master`

把 GitHub 上的 repository 抓到本地
---
>點擊網頁上的 Clone or download 複製 SSH key 

`git clone SSH key`

會發現 commit 後不能 push，因為你沒有 push 到該遠端 repository（別人的）權限 

>或是可以把 repository fork 到自己的 GitHub 上，建立自己的遠端 repository 就可以 push 了

當遇到一些狀況的解決方法
====
人生在很多時候總是有一些小狀況會發生，使用 Git 的時候也不意外，像是 commit message 一個不留神就打錯了，千金難買早知道，commit 之後突然後悔了，這些措手不及的狀況 Git 也是很貼心的知道，所以還是有解決方法的，就一起看下去吧！

### 1. commit 之後又想修改 commit message
`git commit --amend 新的 commit message`

### 2. commit 之後卻後悔了
>回到上一個 commit 的狀態（上一個 commit 修改的檔案還是會在）

`git reset HEAD^ --soft`

>直接消除所有上一個 commit 的狀態（上一個 commit 修改的檔案也會還原）

`git reset HEAD^ --hard`

### 3. 還沒 commit 但後悔了，改過的檔案想還原

>還原特定檔案

`git checkout -- 檔案名稱`

>還原所有改過但還沒 commit 的檔案

`git checkout -- .`

### 4. 該怎麼修改 branch 名稱？

`git branch -m 新分支名稱`

### 5. 該怎麼抓取遠端 branch 到本機端？

`git checkout 分支名稱`

就會自動載下遠端 branch 到本機端

#### * Reference： Lidemy - ［Git101］Git 超新手入門 -> [點這裡進課程](https://www.lidemy.com/courses/enrolled/379441)