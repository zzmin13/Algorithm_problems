let fs = require("fs");
let input = fs
  .readFileSync("예제.txt")
  .toString()
  .split("\n")
  .map((element) => Number(element));
const N = input[0];
input.shift();
const fibonacci = (number, memo) => {
  if (number === 0) {
    memo[number] = [1, 0];
    return memo[number];
  }
  if (number === 1) {
    memo[number] = [0, 1];
    return memo[number];
  }
  if (number === 2) {
    memo[number] = [1, 1];
    return memo[number];
  }
  if (memo[number][0] !== 0 && memo[number][1] !== 0) {
    return memo[number];
  }

  let n_1 = fibonacci(number - 1, memo);
  let n_2 = fibonacci(number - 2, memo);

  return (memo[number] = [n_1[0] + n_2[0], n_1[1] + n_2[1]]);
};

const memo = Array.from(Array(41), () => new Array(2).fill(0));
for (let i = 0; i < N; i++) {
  console.log(fibonacci(input[i], memo).join(" "));
}
