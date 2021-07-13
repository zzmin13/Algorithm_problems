/*
<제목> 전깃줄
<문제>
두 전봇대 A와 B 사이에 하나 둘씩 전깃줄을 추가하다 보니 전깃줄이 서로 교차하는 경우가 발생하였다.
합선의 위험이 있어 이들 중 몇 개의 전깃줄을 없애 전깃줄이 교차하지 않도록 만들려고 한다.

예를 들어, < 그림 1 >과 같이 전깃줄이 연결되어 있는 경우
A의 1번 위치와 B의 8번 위치를 잇는 전깃줄, A의 3번 위치와 B의 9번 위치를 잇는 전깃줄,
A의 4번 위치와 B의 1번 위치를 잇는 전깃줄을 없애면 남아있는 모든 전깃줄이 서로 교차하지 않게 된다.

전깃줄이 전봇대에 연결되는 위치는 전봇대 위에서부터 차례대로 번호가 매겨진다.
전깃줄의 개수와 전깃줄들이 두 전봇대에 연결되는 위치의 번호가 주어질 때,
남아있는 모든 전깃줄이 서로 교차하지 않게 하기 위해 없애야 하는 전깃줄의 최소 개수를 구하는 프로그램을 작성하시오.

<입력>
첫째 줄에는 두 전봇대 사이의 전깃줄의 개수가 주어진다. 전깃줄의 개수는 100 이하의 자연수이다.
둘째 줄부터 한 줄에 하나씩 전깃줄이 A전봇대와 연결되는 위치의 번호와 B전봇대와 연결되는 위치의 번호가 차례로 주어진다.
위치의 번호는 500 이하의 자연수이고, 같은 위치에 두 개 이상의 전깃줄이 연결될 수 없다.

<출력>
첫째 줄에 남아있는 모든 전깃줄이 서로 교차하지 않게 하기 위해 없애야 하는 전깃줄의 최소 개수를 출력한다.

<예제 입력 1>
8
1 8
3 9
2 2
4 1
6 4
10 10
9 7
7 6

<예제 출력 1>
3

*/

let fs = require("fs");
let flex = fs.readFileSync("예제.txt").toString().split("\n");
const N = Number(flex[0]);
flex.shift();
flex = flex
  .map((element) =>
    element
      .trim()
      .split(" ")
      .map((element) => Number(element))
  )
  .sort((a, b) => a[0] - b[0]);
const dp = new Array(N).fill(1);
dp[0] = 1;
for (let i = 1; i < N; i++) {
  const value = [1];
  for (let j = 0; j < i; j++) {
    if (flex[i][1] > flex[j][1]) {
      value.push(dp[j] + 1);
    }
  }
  dp[i] = Math.max(...value);
}
console.log(dp);
console.log(N - Math.max(...dp));
