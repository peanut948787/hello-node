# event loop 作業

程式 1: 請問以下執行結果為何？ after 會在什麼數字後印出？ 為什麼？  
提示: 手動自己畫畫看整段程式的執行過程，call stack 的變化為何？

```javascript
function readData(idx) {
  for (let i = 0; i < 100; i++) {
    idx++;
    console.log(idx);
  }
  if (idx < 500) {
    readData(idx);
  }
}
readData(0);
console.log("after");
```

answer:

1. 執行結果：
   先 console.log 1~ 100,
   進入 if statement ， call readData(100),
   再 console.log 101~ 200,
   再進入 if statement ， call readData(200),
   再 console.log 201~ 300,
   再進入 if statement ， call readData(300),
   再 console.log 301~ 400,
   再進入 if statement ， call readData(400),
   再 console.log 401~ 500，
   最後 console.log "after"。
   <br>
1. after 會在 500 之後印出。
   <br>
1. 因為上面的 readData(0)的 forloop 執行完後，它會進入 if statement，檢查 index 是否小於 500，如果小於 500，則會以該狀態下的 indexy 再 call 一次 readData()，直到 index >=500 它才會停止。而因為 console.log("after") 排在這些 reaData() 後面，所以直到 index >= 500，整個 readData 才算結束，console.log("after")才會執行。
   <br>

程式 2: 請問以下執行結果為何？ after 會在什麼數字後印出？ 為什麼？  
提示: 手動自己畫畫看整段程式的執行過程，call stack 的變化為何？

```javascript
function readData(idx) {
  for (let i = 0; i < 100; i++) {
    idx++;
    console.log(idx);
  }
  if (idx < 500) {
    setTimeout(function () {
      readData(idx);
    }, 0);
  }
}
readData(0);
console.log("after");
```

1. 執行結果：
   readData(0)進入 Call Stack
   readData(0)先 console.log 1~ 100,
   再進入 if statement ，
   執行 setTimeout(function () {readData(idx);}, 0);
   將 setTimeout 交給 Web Api，
   等待 0 秒後 readData(idx)進入 Callback Queue，
   console.log("after")進入 Call Stack
   當 console.log("after")執行完畢後，eventloop 才會將 readData(idx)帶回 Call Stack，
   再 console.log 101~ 200,
   再進入 if statement ， setTimeout(function () {readData(200));}, 0)
   再 console.log 201~ 300,
   再進入 if statement ， setTimeout(function () {readData(300);}, 0)
   再 console.log 301~ 400,
   再進入 if statement ， setTimeout(function () {readData(400);}, 0)
   再 console.log 401~ 500。
   <br>
2. after 會在 100 之後就印出。
   <br>
3. 因為上面的 readData(0)的 forloop 執行完後，它會進入 if statement，檢查 idx 是否小於 500，如果小於 500，則會執行 setTimeout(function () {readData(idx);}。當 setTimeout 被執行，該段程式會交給 WebApi，等待 0 秒後 Web Api 會將 readData(100)擺到 CallBack queue，而在 Call Stack 端 readData 已經算是執行完畢，所以會執行 readData(0)的下一行程式，也就是 console.log("after")，當 console.log("after")執行完後，
   eventloop 才會將 readData(100)帶回 Call Stack 繼續執行。
