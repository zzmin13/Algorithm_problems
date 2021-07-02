/*
예제
7
0110100
0110101
1110101
0000111
0100000
0111110
0111000
*/
let fs = require("fs");
let complex = fs.readFileSync("예제.txt").toString().split("\n");
let N = Number(complex[0]);
complex.shift();
complex = complex.map((element) =>
  element
    .trim()
    .split("")
    .map((value) => Number(value))
);
const visited = Array.from(new Array(7), () => new Array(7).fill(0));
const moveRow = [0, 0, 1, -1];
const moveCol = [1, -1, 0, 0];
const answer = [];

const rangeCheck = (row, col) => {
  if (row >= 0 && row < N && col >= 0 && col < N) {
    return true;
  }
  return false;
};

let number = 0;
const DFS = (row, col) => {
  number++;
  visited[row][col] = number;

  for (let n = 0; n < 4; n++) {
    const nextRow = row + moveRow[n];
    const nextCol = col + moveCol[n];
    if (
      rangeCheck(nextRow, nextCol) &&
      !visited[nextRow][nextCol] &&
      complex[nextRow][nextCol] === 1
    ) {
      DFS(nextRow, nextCol);
    }
  }
  return number;
};
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (complex[i][j] === 1 && visited[i][j] === 0) {
      const n = DFS(i, j);
      answer.push(n);
      number = 0;
    }
  }
}

answer.sort((a, b) => a - b);
answer.unshift(answer.length);
console.log(answer.join("\n"));
