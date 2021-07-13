/*
<제목> 연속합
<문제>
n개의 정수로 이루어진 임의의 수열이 주어진다.
우리는 이 중 연속된 몇 개의 수를 선택해서 구할 수 있는 합 중 가장 큰 합을 구하려고 한다.
단, 수는 한 개 이상 선택해야 한다.
예를 들어서 10, -4, 3, 1, 5, 6, -35, 12, 21, -1 이라는 수열이 주어졌다고 하자.
여기서 정답은 12+21인 33이 정답이 된다.

<입력>
첫째 줄에 정수 n(1 ≤ n ≤ 100,000)이 주어지고 둘째 줄에는 n개의 정수로 이루어진 수열이 주어진다.
수는 -1,000보다 크거나 같고, 1,000보다 작거나 같은 정수이다.

<출력>
첫째 줄에 답을 출력한다.

<예제 입력 1>
10
10 -4 3 1 5 6 -35 12 21 -1

<예제 출력 1>
33

<예제 입력 2>
10
2 1 -4 3 4 -4 6 5 -5 1

<예제 출력 2>
14

<예제 입력 3>
5
-1 -2 -3 -4 -5

<예제 출력 3>
-1 

*/
let fs = require("fs");
let numbers = fs.readFileSync("예제.txt").toString().split("\n");
const N = Number(numbers[0]);
numbers = numbers[1]
  .trim()
  .split(" ")
  .map((element) => Number(element));
numbers.unshift(0);
const dp = new Array(N + 1);
dp[0] = numbers[1];
dp[1] = numbers[1];

for (let i = 2; i <= N; i++) {
  // 직전까지의 부분 합 + 현재 값  : dp[i-1] + numbers[i]
  // 현재 값 : numbers[i]
  if (dp[i - 1] + numbers[i] >= numbers[i]) {
    // 직전까지의 부분 합 + 현재 값이 가장 클 때
    dp[i] = dp[i - 1] + numbers[i];
  } else {
    // 현재 값이 가장 클 때
    dp[i] = numbers[i];
  }
}
console.log(Math.max(...dp));
