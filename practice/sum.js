console.log("hello recursive!");

function sum(n) {
  return n <= 0 ? 0 : sum(n - 1) + n;
}

let result = sum(10);
console.log(result);
