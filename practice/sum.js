console.log("hello world!");

function sum(num) {
  let result = 0;
  while (num > 0) {
    result += num;
    num--;
  }
  return result;
}

let result = sum(10);
console.log(result);
