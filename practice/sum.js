console.log("hello recursive!");

function sum(n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(n - 1) + n;
  }
}

let result = sum(10);
console.log(result);
