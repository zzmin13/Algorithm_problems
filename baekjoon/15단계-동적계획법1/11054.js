let fs = require("fs");
let numbers = fs.readFileSync("예제.txt").toString().split("\n");
const N = Number(numbers[0]);
numbers.shift();
numbers = numbers[0].split(" ").map((element) => Number(element));
numbers.unshift(0);
const increaseDP = new Array(N + 1).fill(1);
const decreaseDP = new Array(N + 1).fill(1);
increaseDP[1] = 1;
decreaseDP[N] = 1;
for (let i = 2; i <= N; i++) {
  const values = [1];
  for (let j = 1; j < i; j++) {
    if (numbers[j] < numbers[i]) {
      values.push(increaseDP[j] + 1);
    }
  }
  increaseDP[i] = Math.max(...values);
}
for (let i = N - 1; i >= 1; i--) {
  const values = [1];
  for (let j = i + 1; j <= N; j++) {
    if (numbers[j] < numbers[i]) {
      values.push(decreaseDP[j] + 1);
    }
  }
  decreaseDP[i] = Math.max(...values);
}
const answer = [];
for (let a = 1; a <= N; a++) {
  answer.push(increaseDP[a] + decreaseDP[a] - 1);
}
console.log(Math.max(...answer));
