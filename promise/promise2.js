let doWork = function (job, timer, isOK) {
  // 物件 new Promise(...) --> 建立一個 Promise 物件
  // 建構式(Promise) 必須要傳一個一個函式 executer 執行者
  // executor(處理成功 resolve, 處理失敗 reject)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let dt = new Date();

      if (isOK) {
        resolve(`完成工作 ${job} at ${dt.toISOString()}`);
      } else {
        reject(`${job}失敗QQc`);
      }
    }, timer);
  });
};

let dt = new Date();
console.log(`開始工作 at ${dt.toISOString()}`);

doWork("刷牙", 3000, false)
  //   .then((data) => {
  //     console.log(data);
  //     return doWork("吃早餐1", 5000, false); // doWork 會回傳一個 new Promise
  //   })
  //   .catch(
  //     (data) => {
  //       console.log(data);
  //       return doWork("吃早餐2", 5000, false); // doWork 會回傳一個 new Promise
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   )
  .catch(
    (data) => {
      console.log("fulfilled", data);
      let homeworkPromise = doWork("寫功課", 3000);
      return homeworkPromise;
    },
    (err) => {
      console.log(err, "frankenstein????");
      //   return doWork("吃早餐3", 5000, false); // doWork 會回傳一個 new Promise
    }
  );
//   .then((data) => {
//     console.log(data);
//     return doWork("吃早餐4", 5000, false); // doWork 會回傳一個 new Promise
//   })
//   .then((data) => {
//     console.log(data);
//     return doWork("吃早餐5", 5000, false); // doWork 會回傳一個 new Promise
//   })
//   .catch((data) => {
//     console.log(data + " " + "不一樣的catch");
//     return doWork("寫功課", 3000, true);
//   })
//   //   .then((data) => {
//   //     console.log("fulfilled", data);
//   //     return doWork("寫功課", 3000, true);
//   //   })
//   .then((data) => {
//     console.log(data);
//   });
// //   .catch((err) => {
// //     // 攔截前面的 then 第二個參數要做的那個錯誤處理函式
// //     console.error("rejected", err);
// //   });
