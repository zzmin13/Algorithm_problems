/*
<제목> 1로 만들기
<문제>
정수 X에 사용할 수 있는 연산은 다음과 같이 세 가지 이다.
1. X가 3으로 나누어 떨어지면, 3으로 나눈다.
2. X가 2로 나누어 떨어지면, 2로 나눈다.
3. 1을 뺀다.
정수 N이 주어졌을 때, 위와 같은 연산 세 개를 적절히 사용해서 1을 만들려고 한다. 연산을 사용하는 횟수의 최솟값을 출력하시오.

<입력>
첫째 줄에 1보다 크거나 같고, 10^6보다 작거나 같은 정수 N이 주어진다.

<출력>
첫째 줄에 연산을 하는 횟수의 최솟값을 출력한다.

<예제 입력 1>
2

<예제 출력 1>
1

<예제 입력 2>
10

<예제 출력 2>
3

*/

let fs = require("fs");
let N = Number(fs.readFileSync("예제.txt").toString());

const dp = new Array(N + 1);
dp[1] = 0;
dp[2] = dp[1] + 1;
dp[3] = Math.min(dp[1] + 1, dp[2] + 1);

for (let i = 4; i <= N; i++) {
  if (i % 2 !== 0 && i % 3 !== 0) {
    dp[i] = dp[i - 1] + 1;
  } else if (i % 2 === 0 && i % 3 === 0) {
    dp[i] = Math.min(dp[i - 1] + 1, dp[i / 2] + 1, dp[i / 3] + 1);
  } else if (i % 2 === 0) {
    dp[i] = Math.min(dp[i - 1] + 1, dp[i / 2] + 1);
  } else if (i % 3 === 0) {
    dp[i] = Math.min(dp[i - 1] + 1, dp[i / 3] + 1);
  }
}

console.log(dp[N]);
