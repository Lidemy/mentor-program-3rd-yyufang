## 教你朋友 CLI

什麼是 Command Line？
===================
<pre>
其實 Command Line 就是一種操控電腦的方法，簡稱為 CLI，而操控電腦的方法有兩種，一種是我們熟悉的操作電腦方式，在電腦的圖形介面上，想要電腦執行什麼就對相對應的圖形點擊運作，像是如果我們想開啟一個新的資料夾，我們就對滑鼠按右鍵，選取清單中的「新建資料夾」，我們稱這樣的介面叫做 Graphical User Interface，簡稱 GUI，那麼以前電腦還沒有開發出這些圖形介面的時候，該怎麼去請電腦幫我們新建一個資料夾呢，這時就可以透過 CLI，以文字輸入指令來操控電腦。
</pre>

該怎麼使用 Command Line 去對電腦下指令？
===================
<pre>
如果是 windows 作業系統的電腦，建議可以安裝 cmder 這個套件，安裝完畢進入該資料夾後，直接點擊 cmder.exe，會跳出一個視窗，就可以用那個視窗來輸入 Command Line 了，如果是 mac os，可以直接開啟內建的終端機（Terminal）來執行 Command Line。
</pre>

常用的 Command Line 語法
===================
<pre>
pwd   - 查詢現在位置（Print Working Directory）
ls    - 列出現在位置下的檔案列表（List）
cd    - 轉換目錄（Change Directory）
man   - 指令使用手冊，會列出指令的介紹使用方法，鍵入 q 可離開說明頁面（Manual）
</pre>


檔案操作相關的 Command Line 語法
===================
<pre>
touch - 建立檔案（當 Directory 內沒有該名稱的檔案），或更改檔案時間（當 Directory 內已存在該檔案）
mkdir - 新建資料夾（Make Directory）
rm    - 刪除檔案（Remove），僅能刪除檔案，若要以此語法刪除資料夾，則須加入 -r 的指令
rmdir - 刪除資料夾（Remove Directory）
mv    - 移動檔案或是更改檔案名稱（Ｍove）
cp    - 複製檔案（Copy）
</pre>

好用的編輯器
===================
<pre>
vim - 用來查看或編輯檔案 
1. vim [檔案名稱] - 進入檔案
2. 進入檔案，若要編輯檔案，輸入 i 可以開始進行編輯，編輯結束後按 esc 鍵
3. 輸入：q 即可離開 vim，若想要在離開時一併儲存修改檔案的部分則輸入：wq 
</pre>

語法舉例應用說明
===================
看了前面的語法說明可能還是有點模糊，那就一起透過實際例子來熟悉語法吧
------------------
<pre>
狀況一：打開終端機後，該怎麼知道現在哪裡，還有我在的地方下面有什麼檔案呢？
<pre>
1. 以 pwd 查詢現在目錄
&emsp;&emsp;輸入：pwd
&emsp;&emsp;輸出：/Users/xxxxx
&emsp;&emsp;表示現在在 /Users/xxxxx 下

2.  以 ls 查詢 /Users/xxxxx 下的檔案列表
&emsp;&emsp;輸入：ls
&emsp;&emsp;輸出：Applications&emsp;Movies&emsp;Music&emsp;Desktop&emsp;Pictures
&emsp;&emsp;表示 /Users/xxxxx 下有 Applications、Movies、Music、Desktop、Pictures 這些檔案
</pre></pre>

<pre>
狀況二：如果想在桌面創建一個名為 test 的資料夾，並在裡面建立一個名為 A 的文字檔和一個名為 B 的 js 檔，該怎麼做呢？
<pre>
1. 狀況一可知道現在所在的位置下有桌面的資料夾，以 cd 切換到桌面，若發現現在路徑下沒有該資料夾，則可輸入絕對路徑來進行切換，切換後可以 pwd 查詢現在目錄再次確認位置
&emsp;&emsp;輸入（相對路徑）：cd Desktop
&emsp;&emsp;或輸入（絕對路徑）：cd /Users/xxxxx/Desktop
&emsp;&emsp;輸出： /Users/xxxxx
&emsp;&emsp;表示現在在 /Users/xxxxx 下

2. 創建一個名為 test 的資料夾，創建後可以 ls 查看是否有創建成功
&emsp;&emsp;輸入： mkdir test

3. 切換到 test 資料夾內，建立一個名為 A 的文字檔、一個名為 B 的 js 檔和一個名為 C 的資料夾，創建後可以 ls 查看是否有成功
&emsp;&emsp;輸入： cd test
&emsp;&emsp;輸入： touch A.txt
&emsp;&emsp;輸入： touch B.js
&emsp;&emsp;輸入： mkdir C
</pre></pre>

<pre>
狀況三：如果想把 B.js 重新命名成 BB.js，然後把它移到 C 資料夾內，該怎麼做呢？
<pre>
1. 把 B.js 重新命名成 BB.js
&emsp;&emsp;輸入： mv  B.js BB.js

2. 移到 C 資料夾內
&emsp;&emsp;輸入： mv  BB.js C
</pre></pre>


<pre>
狀況四：如果想把 test 的資料夾內的 A.txt 刪除，該怎麼做呢？
<pre>
1. 以 pwd 確認目錄在 test 資料夾
&emsp;&emsp;輸入（相對路徑）：pwd
&emsp;&emsp;輸出： /Users/xxxxx/Desktop/test

2. 把 A.txt 刪除，刪除後可以 ls 查看是否有成功
&emsp;&emsp;輸入： rm A.txt
</pre></pre>

<pre>
狀況五：如果想把 test 資料夾刪除，該怎麼做呢？
<pre>
方法一：前面有說 rm 只能對檔案執行，若要以 rm 刪除資料夾則要再加上 -r，刪除後可以 ls 查看是否有成功
&emsp;&emsp;輸入：rm -r test

方法二：以 rmdir 將 B.js 刪除，刪除後可以 ls 查看是否有成功
&emsp;&emsp;輸入：rmdirr test

延伸問題：-r 是什麼意思呢？
&emsp;&emsp;輸入：man rm
就可以查看 rm 的相關語法使用功能
</pre></pre>
</pre>

挑戰看看
===
請在桌面建立一個叫做 wifi 的資料夾，並且在裡面建立一個叫 afu.js 的檔案 (挑戰完再看解法囉)
---
### 解法
#### 確認現在目錄
<pre>
pwd
</pre>
輸出
<pre>
/Users/xxxxx
</pre>
#### 切換目錄至桌面
<pre>
cd Desktop
</pre>
#### 建立資料夾
<pre>
mkdir wifi
</pre>
#### 切換至 wifi 資料夾，建立檔案
<pre>
cd wifi
</pre>
<pre>
touch afu.js
</pre>

#### * Reference： Lidemy - [CMD101] Command Line 超新手入門 -> [點這裡進課程](https://www.lidemy.com/courses/enrolled/386965)