let fs = require("fs");
let numbers = fs.readFileSync("예제.txt").toString().split("\n");
const N = Number(numbers[0]);
numbers = numbers[1]
  .trim()
  .split(" ")
  .map((element) => Number(element));
numbers.unshift(0);

const increaseDP = new Array(N + 1).fill(1);
const decreaseDP = new Array(N + 1).fill(1);
const dp = new Array(N + 1).fill(1);
for (let i = 2; i <= N; i++) {
  for (let j = 1; j < i; j++) {
    if (numbers[j] < numbers[i]) {
      if (increaseDP[i] < increaseDP[j] + 1) {
        increaseDP[i] = increaseDP[j] + 1;
      }
    }
  }
}

for (let i = N - 1; i >= 1; i--) {
  for (let j = N; j > i; j--) {
    if (numbers[j] < numbers[i]) {
      if (decreaseDP[i] < decreaseDP[j] + 1) {
        decreaseDP[i] = decreaseDP[j] + 1;
      }
    }
  }
}

for (let i = 1; i <= N; i++) {
  dp[i] = increaseDP[i] + decreaseDP[i] - 1;
}

console.log(Math.max(...dp));
