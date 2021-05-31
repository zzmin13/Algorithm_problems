let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\n");

const numberOfTest = Number(input[0]);
input.shift();

let visited = [];
let field = [];
let bug = 0;
const testCase = [];
const answer = [];

const moveRow = [0, 0, 1, -1];
const moveCol = [1, -1, 0, 0];

const rangeCheck = (r, c, row, col) => {
  if (r >= 0 && r < row && c >= 0 && c < col) {
    // console.log(`r: ${r}, c: ${c}, row: ${row}, col: ${col}`);
    return true;
  }
  return false;
};

const BFS = (r, c, row, col, visited) => {
  const queue = [];
  queue.push([r, c]);
  while (queue.length) {
    const target = queue.shift();
    const r = target[0];
    const c = target[1];
    if (rangeCheck(r, c, row, col) && visited[r][c] === 0) {
      visited[r][c] = 1;
      for (let n = 0; n < moveRow.length; n++) {
        if (
          rangeCheck(r + moveRow[n], c + moveCol[n], row, col) &&
          field[r + moveRow[n]][c + moveCol[n]] === 1
        ) {
          queue.push([r + moveRow[n], c + moveCol[n]]);
        }
      }
    }
  }
};
for (let i = 0; i < numberOfTest; i++) {
  const boundary = Number(input[0].split(" ")[2]);
  testCase.push(input.splice(0, boundary + 1));
}

for (let i = 0; i < numberOfTest; i++) {
  const target = testCase[i][0].split(" ");
  const row = Number(target[1]); // 세로 : 8 => 행이 8이라는 것
  const column = Number(target[0]); // 가로 : 10 => 열이 10이라는 것
  const cabbageNumber = Number(target[2]); // 배추의 개수 17개
  visited = Array.from(new Array(row), () => new Array(column).fill(0));
  field = Array.from(new Array(row), () => new Array(column).fill(0));

  for (let j = 1; j < testCase[i].length; j++) {
    const target = testCase[i][j].split(" ");
    const cabbageRow = Number(target[1]);
    const cabbageCol = Number(target[0]);
    field[cabbageRow][cabbageCol] = 1;
  }

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < column; c++) {
      if (field[r][c] === 1 && visited[r][c] === 0) {
        bug++;
        BFS(r, c, row, column, visited);
      }
    }
  }
  answer.push(bug);
  bug = 0;
}
console.log(answer.join("\n"));
