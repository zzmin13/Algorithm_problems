/*
<제목> LCS
<문제>
LCS(Longest Common Subsequence, 최장 공통 부분 수열)문제는 두 수열이 주어졌을 때,
모두의 부분 수열이 되는 수열 중 가장 긴 것을 찾는 문제이다.

예를 들어, ACAYKP와 CAPCAK의 LCS는 ACAK가 된다.

<입력>
첫째 줄과 둘째 줄에 두 문자열이 주어진다.
문자열은 알파벳 대문자로만 이루어져 있으며, 최대 1000글자로 이루어져 있다.

<출력>
첫째 줄에 입력으로 주어진 두 문자열의 LCS의 길이를 출력한다.

<예제 입력 1>
ACAYKP
CAPCAK

<예제 출력 1>
4

*/

let fs = require("fs");
let string = fs.readFileSync("예제.txt").toString().split("\n");
const string1 = string[0];
const string2 = string[1];
const s1 = string1.length;
const s2 = string2.length;

const dp = Array.from(new Array(s1 + 1), () => new Array(s2 + 1));
for (let i = 0; i <= s1; i++) {
  dp[i][0] = 0;
}
for (let j = 0; j <= s2; j++) {
  dp[0][j] = 0;
}

for (let i = 1; i <= s1; i++) {
  for (let j = 1; j <= s2; j++) {
    if (string1.charAt(i - 1) === string2.charAt(j - 1)) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
}
console.log(dp[s1][s2]);
