/*
<제목> 토마토
<문제>
철수의 토마토 농장에서는 토마토를 보관하는 큰 창고를 가지고 있다.
토마토는 아래의 그림과 같이 격자모양 상자의 칸에 하나씩 넣은 다음, 상자들을 수직으로 쌓아 올려서 창고에 보관한다.

창고에 보관되는 토마토들 중에는 잘 익은 것도 있지만, 아직 익지 않은 토마토들도 있을 수 있다.
보관 후 하루가 지나면, 익은 토마토들의 인접한 곳에 있는 익지 않은 토마토들은 익은 토마토의 영향을 받아 익게 된다.
하나의 토마토에 인접한 곳은 위, 아래, 왼쪽, 오른쪽, 앞, 뒤 여섯 방향에 있는 토마토를 의미한다.
대각선 방향에 있는 토마토들에게는 영향을 주지 못하며, 토마토가 혼자 저절로 익는 경우는 없다고 가정한다.
철수는 창고에 보관된 토마토들이 며칠이 지나면 다 익게 되는지 그 최소 일수를 알고 싶어 한다.
토마토를 창고에 보관하는 격자모양의 상자들의 크기와 익은 토마토들과 익지 않은 토마토들의 정보가 주어졌을 때,
며칠이 지나면 토마토들이 모두 익는지, 그 최소 일수를 구하는 프로그램을 작성하라.
단, 상자의 일부 칸에는 토마토가 들어있지 않을 수도 있다.

<입력>
첫 줄에는 상자의 크기를 나타내는 두 정수 M,N과 쌓아올려지는 상자의 수를 나타내는 H가 주어진다.
M은 상자의 가로 칸의 수, N은 상자의 세로 칸의 수를 나타낸다.
단, 2 ≤ M ≤ 100, 2 ≤ N ≤ 100, 1 ≤ H ≤ 100 이다.
둘째 줄부터는 가장 밑의 상자부터 가장 위의 상자까지에 저장된 토마토들의 정보가 주어진다.
즉, 둘째 줄부터 N개의 줄에는 하나의 상자에 담긴 토마토의 정보가 주어진다.
각 줄에는 상자 가로줄에 들어있는 토마토들의 상태가 M개의 정수로 주어진다.
정수 1은 익은 토마토, 정수 0 은 익지 않은 토마토, 정수 -1은 토마토가 들어있지 않은 칸을 나타낸다. 
러한 N개의 줄이 H번 반복하여 주어진다.
토마토가 하나 이상 있는 경우만 입력으로 주어진다.

<출력>
여러분은 토마토가 모두 익을 때까지 최소 며칠이 걸리는지를 계산해서 출력해야 한다.
만약, 저장될 때부터 모든 토마토가 익어있는 상태이면 0을 출력해야 하고, 토마토가 모두 익지는 못하는 상황이면 -1을 출력해야 한다.

<예제 입력 1>
5 3 1
0 -1 0 0 0
-1 -1 0 1 1
0 0 0 1 1

<예제 출력 1>
-1

<예제 입력 2>
5 3 2
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 1 0 0
0 0 0 0 0

<예제 출력 2>
4

<예제 입력 3>
4 3 2
1 1 1 1
1 1 1 1
1 1 1 1
1 1 1 1
-1 -1 -1 -1
1 1 1 -1

<예제 출력 3>
0

*/

let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\n");
input[0] = input[0].split(" ");
const Row = Number(input[0][1]);
const Column = Number(input[0][0]);
const Box = Number(input[0][2]);
input.shift();
input = input.map((element) => element.trim().split(" "));
const tomato = Array.from(new Array(Box), () => new Array());
for (let b = 0; b < Box; b++) {
  const startIndex = b * Row;
  for (let i = startIndex; i < startIndex + Row; i++) {
    tomato[b].push(input[i]);
  }
}
const rangeCheck = (box, row, col) => {
  if (
    box >= 0 &&
    box < Box &&
    row >= 0 &&
    row < Row &&
    col >= 0 &&
    col < Column
  ) {
    return true;
  }
  return false;
};
const BFS = (queue) => {
  let result;
  let number = 0;
  while (number !== queue.length) {
    const b = queue[number][0];
    const r = queue[number][1];
    const c = queue[number][2];
    // console.log(`b: ${b}, r : ${r}, c: ${c}`);
    for (let d = 0; d < 6; d++) {
      const nextBox = b + moveBox[d];
      const nextRow = r + moveRow[d];
      const nextCol = c + moveCol[d];
      if (
        rangeCheck(nextBox, nextRow, nextCol) &&
        ripeTomato[nextBox][nextRow][nextCol] === 0 &&
        Number(tomato[nextBox][nextRow][nextCol]) === 0
      ) {
        queue.push([nextBox, nextRow, nextCol]);
        ripeTomato[nextBox][nextRow][nextCol] = ripeTomato[b][r][c] + 1;
        result = ripeTomato[nextBox][nextRow][nextCol];
      }
    }
    number++;
  }
  return result - 1;
};

const queue = []; // 큐 : [ [box, row, column], [box, row, column]]... 큐에는 익은 토마토가 들어갈 예정이다.
const ripeTomato = Array.from(new Array(Box), () =>
  Array.from(new Array(Row), () => new Array(Column).fill(0))
);
const moveBox = [0, 0, 0, 0, -1, 1]; // 동 서 남 북 앞 뒤
const moveRow = [0, 0, 1, -1, 0, 0]; // 동 서 남 북 앞 뒤
const moveCol = [1, -1, 0, 0, 0, 0]; // 동 서 남 북 앞 뒤
// 초벌 작업 끝

let zero = false;
for (let b = 0; b < Box; b++) {
  for (let r = 0; r < Row; r++) {
    for (let c = 0; c < Column; c++) {
      if (Number(tomato[b][r][c]) === 1) {
        queue.push([b, r, c]);
        ripeTomato[b][r][c] = 1;
      }
      if (Number(tomato[b][r][c]) === -1) {
        ripeTomato[b][r][c] = -1;
      }
      if (Number(tomato[b][r][c]) === 0) {
        zero = true;
      }
    }
  }
}
let answer;

if (!zero) {
  answer = 0;
} else {
  answer = BFS(queue);

  for (let b = 0; b < Box; b++) {
    for (let r = 0; r < Row; r++) {
      for (let c = 0; c < Column; c++) {
        if (ripeTomato[b][r][c] === 0) {
          answer = -1;
          break;
        }
      }
    }
  }
}
console.log(answer);
