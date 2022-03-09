# Dcard 2022 Web Frontend Intern Homework

這個網站是用來申請 Dcard 暑期前端實習的功課
[連結可點這裡(右鍵開新分頁)](https://dcard-hw.chiendavid.com/)

## 啟動說明

直接開啟上方連結即可進入線上環境（使用 firebase hosting）

若需在 local 端執行則將 repo clone 下來後執行

```
npm install

npm start
```

## 架構說明

網站主要分為上方 navbar 跟下方資料呈現區域
***
### `Navbar`
主要的功能再這裡實現，包括：

#### 左方回到熱門（首頁）
> 單純的頁面跳轉功能
#### 中間的搜尋欄
> 用 ref 監聽使用者輸入，當使用者按下搜尋按鈕時，會將網址導引至 /users/{username}/repos。
>
#### 右方的最近搜尋欄
>會將最近瀏覽的三個 username 存至 localStorage，且會自動重新排序。
>
> 點擊裡面的使用者名稱後，會將網址導引至 /users/{username}/repos。
***
### `資料呈現區域`
資料都在這呈現，包括：
#### 熱門頁面 <Route = '/trending'>
> 就是單純的一頁，fetch 的資料為 github 上星星最多的排序
#### 使用者搜尋頁面 <Route = '/users/:username/repos'>
> 從 url params 取得 username ，然後 render 出該使用者的搜尋結果，使用 useEffect fetch 到資料後存至 redux 並顯示出來。
>
> 畫面中每一 row 的 repo 點擊後都會將網址導引至 /users/{username}/repos/{repo}
>
> Lazy Loading 實作的方式是利用 url parameters ?perpage=10&page=1 並搭配 State 控制頁數，於滾動至底部時觸發。
#### 單一 repo 頁面 <Route = '/users/:username/repos/:repoName'>
> 因題目要求串接 GET /repos/{owner}/{repo} 回傳的資料，因此就沒有從 redux 傳入資料
>
> 從 url params 取得 username 及 repoName ，然後 render 出該使用者該 repo 的搜尋結果出來。
>
> 呈現方式分為 Page 跟 Modal ，依照不同的進入方式 render 畫面。
#### Topic 頁面 <Route = '/topic/:topic'>
> 在單一 Repo 內如果有 topics 存在會以連結的形式顯示出來，點擊後導引頁面到此 Topic 頁面
>
> 資料為相關主題的 Repo ，依星星數量排序。
***
## 額外補充
### 版面設計
> 因為是為了投 Dcard 所做的網站，在設計上是以 Dcard 本人的樣式做為參考。