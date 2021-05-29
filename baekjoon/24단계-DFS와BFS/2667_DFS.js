/*
<제목> 단지 번호 붙이기

<문제>
<그림 1>과 같이 정사각형 모양의 지도가 있다.
1은 집이 있는 곳을, 0은 집이 없는 곳을 나타낸다.
철수는 이 지도를 가지고 연결된 집의 모임인 단지를 정의하고, 단지에 번호를 붙이려 한다.
여기서 연결되었다는 것은 어떤 집이 좌우, 혹은 아래위로 다른 집이 있는 경우를 말한다.
대각선상에 집이 있는 경우는 연결된 것이 아니다.
<그림 2>는 <그림 1>을 단지별로 번호를 붙인 것이다.
지도를 입력하여 단지수를 출력하고, 각 단지에 속하는 집의 수를 오름차순으로 정렬하여 출력하는 프로그램을 작성하시오.

<입력>
첫 번째 줄에는 지도의 크기 N(정사각형이므로 가로와 세로의 크기는 같으며 5≤N≤25)이 입력되고, 그 다음 N줄에는 각각 N개의 자료(0혹은 1)가 입력된다.

<출력>
첫 번째 줄에는 총 단지수를 출력하시오. 그리고 각 단지내 집의 수를 오름차순으로 정렬하여 한 줄에 하나씩 출력하시오.

<예제 입력 1>
7
0110100
0110101
1110101
0000111
0100000
0111110
0111000

<예제 출력 1>
3
7
8
9

*/

let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\n");
const N = Number(input[0]);
input.shift();
input = input.map((element) => {
  return element
    .trim()
    .split("")
    .map((element) => Number(element));
});
const visited = [];
for (let i = 0; i < N; i++) {
  visited.push(new Array(N).fill(0));
}

// x : 행 / y: 열
const moveRow = [0, 0, 1, -1]; // 동, 서, 남, 북
const moveCol = [1, -1, 0, 0]; // 동, 서, 남, 북

// 범위 체크
const rangeCheck = (row, col) => {
  if (row >= 0 && row < N && col >= 0 && col < N) {
    return true;
  }
  return false;
};

// DFS
const DFS = (row, col) => {
  if (
    rangeCheck(row, col) === true &&
    input[row][col] === 1 &&
    visited[row][col] === 0
  ) {
    // 범위안에 들어가고 && 방문한적이 없으면 DFS 탐색
    visited[row][col] = 1; // 방문 처리
    number++;
    for (let n = 0; n < moveRow.length; n++) {
      DFS(row + moveRow[n], col + moveCol[n]);
    }
  }
};

const complex = [];
let number = 0;

for (let row = 0; row < N; row++) {
  for (let col = 0; col < N; col++) {
    if (Number(input[row][col]) === 1 && visited[row][col] === 0) {
      DFS(row, col);
      complex.push(number);
      number = 0;
    }
  }
}
complex.sort((a, b) => a - b); // 오름차순으로 정렬!
const answer = [complex.length, ...complex];

console.log(answer.join("\n"));
