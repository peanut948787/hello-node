console.log(1);

async function dowork() {
  console.log(2);

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(3);
      resolve("success")
    }, 3000);
  });
    console.log(4);
}

console.log(5);
dowork();
console.log(6);

// console.log(1);

// async function doWork() {
//   console.log(2);

//   // 暫停（不是阻塞）
//   await setTimeout(() => {
//     console.log(3);
//   }, 3000);
//   console.log(4);
// }

// console.log(5);
// doWork();
// console.log(6);