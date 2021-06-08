/*
<제목> 벽 부수고 이동하기
<문제>
N×M의 행렬로 표현되는 맵이 있다.
맵에서 0은 이동할 수 있는 곳을 나타내고, 1은 이동할 수 없는 벽이 있는 곳을 나타낸다.
당신은 (1, 1)에서 (N, M)의 위치까지 이동하려 하는데, 이때 최단 경로로 이동하려 한다.
최단경로는 맵에서 가장 적은 개수의 칸을 지나는 경로를 말하는데, 이때 시작하는 칸과 끝나는 칸도 포함해서 센다.
만약에 이동하는 도중에 한 개의 벽을 부수고 이동하는 것이 좀 더 경로가 짧아진다면, 벽을 한 개 까지 부수고 이동하여도 된다.
한 칸에서 이동할 수 있는 칸은 상하좌우로 인접한 칸이다.
맵이 주어졌을 때, 최단 경로를 구해 내는 프로그램을 작성하시오.

<입력>
첫째 줄에 N(1 ≤ N ≤ 1,000), M(1 ≤ M ≤ 1,000)이 주어진다.
다음 N개의 줄에 M개의 숫자로 맵이 주어진다. (1, 1)과 (N, M)은 항상 0이라고 가정하자.

<출력>
첫째 줄에 최단 거리를 출력한다. 불가능할 때는 -1을 출력한다.

<예제 입력 1>
6 4
0100
1110
1000
0000
0111
0000

<예제 출력 1>
15

<예제 입력 2>
4 4
0111
1111
1111
1110

<예제 출력 2>
-1

*/

let fs = require("fs");
let graph = fs
  .readFileSync("예제.txt")
  .toString()
  .split("\n")
  .map((element) => element.trim().split(""));
const ROW = Number(graph[0][0]);
const COLUMN = Number(graph[0][2]);
const WALL = 2;
graph.shift();
const visited = Array.from(new Array(WALL), () =>
  Array.from(new Array(ROW), () => new Array(COLUMN))
);
const result = Array.from(new Array(ROW), () => new Array(COLUMN));
const moveRow = [0, 0, 1, -1]; // 동 서 남 북 (행)
const moveCol = [1, -1, 0, 0]; // 동 서 남 북 (열)

// graph, visited[wall][row][col], result[row][col]

const RangeCheck = (row, column) => {
  if (row >= 0 && row < ROW && column >= 0 && column < COLUMN) {
    return true;
  }
  return false;
};

const BFS = (queue) => {
  visited[0][0][0] = true; // 벽을 부수지 않은 세계 (시작점)
  visited[1][0][0] = true; // 벽을 부순 세계 (시작점)
  result[0][0] = 1;
  let iterate = true;
  while (queue.length) {
    // 현재 벽이 0이면 부순적 없고 벽이 1이면 부순 적 있는 것
    const target = queue.shift();
    const currentWall = target[0];
    const currentRow = target[1];
    const currentCol = target[2];

    for (let n = 0; n < 4; n++) {
      const nextRow = currentRow + moveRow[n];
      const nextCol = currentCol + moveCol[n];
      if (RangeCheck(nextRow, nextCol)) {
        // 일단 범위 안에 들어가야 함
        if (
          Number(graph[nextRow][nextCol]) === 1 &&
          currentWall === 0 &&
          !visited[1][nextRow][nextCol]
        ) {
          // 벽 O, 부순 적 X, 방문한 적 X
          visited[1][nextRow][nextCol] = true;
          result[nextRow][nextCol] = result[currentRow][currentCol] + 1;
          queue.push([1, nextRow, nextCol]); // 부순 적 있다고 체크하고 큐에 넣음
        }
        if (
          Number(graph[nextRow][nextCol]) !== 1 &&
          !visited[currentWall][nextRow][nextCol]
        ) {
          // 벽 X, 방문한 적 X
          visited[currentWall][nextRow][nextCol] = true;
          result[nextRow][nextCol] = result[currentRow][currentCol] + 1;
          queue.push([currentWall, nextRow, nextCol]);
        }
        if (nextRow === ROW - 1 && nextCol === COLUMN - 1) {
          iterate = false;
          break;
        }
      }
    }
    if (iterate === false) {
      break;
    }
  }
};
const queue = [[0, 0, 0]]; // 큐에 시작점을 넣고 시작함
BFS(queue);
const answer = result[ROW - 1][COLUMN - 1];
if (answer === undefined) {
  console.log(-1);
} else {
  console.log(answer);
}
