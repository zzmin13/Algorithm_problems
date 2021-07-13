let fs = require("fs");
let numbers = fs.readFileSync("예제.txt").toString().split("\n");
const N = Number(numbers[0]);
numbers = numbers[1]
  .trim()
  .split(" ")
  .map((element) => Number(element));

const increaseDP = new Array(N).fill(1);
const decreaseDP = new Array(N).fill(1);
const dp = new Array(N);

for (let i = 1; i < N; i++) {
  const values = [1];
  for (let j = 0; j < i; j++) {
    if (numbers[j] < numbers[i]) {
      values.push(increaseDP[j] + 1);
    }
  }
  increaseDP[i] = Math.max(...values);
}

for (let a = N - 2; a >= 0; a--) {
  const values = [1];
  for (let b = N - 1; b > a; b--) {
    if (numbers[b] < numbers[a]) {
      values.push(decreaseDP[b] + 1);
    }
  }
  decreaseDP[a] = Math.max(...values);
}

for (let n = 0; n < N; n++) {
  dp[n] = increaseDP[n] + decreaseDP[n];
}
console.log(Math.max(...dp) - 1);
