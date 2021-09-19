console.log("hello world!");

function sum(n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(n - 1) + n;
  }
}

function sum2(num) {
  let result = 0;
  while (num > 0) {
    result += num;
    num--;
  }
  return result;
}

let result = sum(10);
console.log(result);
