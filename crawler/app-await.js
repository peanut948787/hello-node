const axios = require("axios");

let stockCode = "2330";
let today = "20211017";
let format = "json";

// "https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=" + format + "&date=" + today + "&stockNo=" + stockCode
// `https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=${format}&date=${today}&stockNo=${stockCode}`

// axios
//   .get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
//     params: {
//       response: format,
//       date: today,
//       stockNo: stockCode,
//     },
//   })
//   .then((res) => {
//     // HTTP response
//     console.log(res.data);
//   })
//   .catch((e) => {
//     console.error("發生錯誤啦", e);g
//   });

(async function axiosAwait() {
    try{
        let result = await axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
          params: {
            response: format,
            date: today,
            stockNo: stockCode,
          },
        });
        console.log(result.data);
    } catch (err) {
        console.error(err);
    }
})();

