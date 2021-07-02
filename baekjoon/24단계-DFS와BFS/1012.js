let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\n");
const answer = [];
const T = Number(input[0]);
input.shift();
input = input.map((element) => element.trim().split(" "));
let number = 0;
const moveRow = [0, 0, 1, -1];
const moveCol = [1, -1, 0, 0];
const rangeCheck = (r, c, row, col) => {
  if (r >= 0 && r < row && c >= 0 && c < col) {
    return true;
  }
  return false;
};
const BFS = (r, c, row, col, visited, cabbage) => {
  const queue = [[r, c]];
  visited[r][c] = 1;
  while (queue.length) {
    const target = queue.shift();
    const currentRow = target[0];
    const currentCol = target[1];
    for (let n = 0; n < 4; n++) {
      const nextRow = currentRow + moveRow[n];
      const nextCol = currentCol + moveCol[n];
      if (
        rangeCheck(nextRow, nextCol, row, col) &&
        visited[nextRow][nextCol] === 0 &&
        cabbage[nextRow][nextCol] === 1
      ) {
        queue.push([nextRow, nextCol]);
        visited[nextRow][nextCol] = 1;
      }
    }
  }
};

for (let i = 0; i < T; i++) {
  const information = input.shift();
  const array = input.splice(0, Number(information[2]));
  const row = Number(information[1]);
  const col = Number(information[0]);

  const cabbage = Array.from(new Array(row), () => new Array(col).fill(0));
  for (let j = 0; j < array.length; j++) {
    cabbage[Number(array[j][1])][Number(array[j][0])] = 1;
  }
  const visited = Array.from(new Array(row), () => new Array(col).fill(0));
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (cabbage[r][c] === 1 && visited[r][c] === 0) {
        number++;
        BFS(r, c, row, col, visited, cabbage);
      }
    }
  }
  answer.push(number);
  number = 0;
}
console.log(answer.join("\n"));
