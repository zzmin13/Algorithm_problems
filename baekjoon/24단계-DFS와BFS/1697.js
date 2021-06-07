/*
<제목> 숨바꼭질
<문제>
수빈이는 동생과 숨바꼭질을 하고 있다.
수빈이는 현재 점 N(0 ≤ N ≤ 100,000)에 있고, 동생은 점 K(0 ≤ K ≤ 100,000)에 있다. 수빈이는 걷거나 순간이동을 할 수 있다.
만약, 수빈이의 위치가 X일 때 걷는다면 1초 후에 X-1 또는 X+1로 이동하게 된다.
순간이동을 하는 경우에는 1초 후에 2*X의 위치로 이동하게 된다.
수빈이와 동생의 위치가 주어졌을 때, 수빈이가 동생을 찾을 수 있는 가장 빠른 시간이 몇 초 후인지 구하는 프로그램을 작성하시오.

<입력>
첫 번째 줄에 수빈이가 있는 위치 N과 동생이 있는 위치 K가 주어진다. N과 K는 정수이다.

<출력>
수빈이가 동생을 찾는 가장 빠른 시간을 출력한다.

<예제 입력 1>
5 17

<예제 출력 1>
4 

*/

let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split(" ");
const subin = Number(input[0]); // 수빈이 있는 위치
const sister = Number(input[1]); // 동생이 있는 위치
let answer;

const BFS = (queue) => {
  let findAnswer = false;
  const visited = {};
  visited[subin] = 0;
  for (let element of queue) {
    if (element >= 0) {
      if (element === sister) {
        answer = 1;
        findAnswer = true;
        break;
      }
      visited[element] = 1;
    }
  }
  while (queue.length && !findAnswer) {
    const target = queue.shift();
    const nexts = [target - 1, target + 1, 2 * target];
    for (let next of nexts) {
      if (visited[next] === undefined && next <= 2 * sister && next >= 0) {
        if (next === sister) {
          answer = visited[target] + 1;
          findAnswer = true;
          break;
        }
        queue.push(next);
        visited[next] = visited[target] + 1;
      }
    }
    if (findAnswer) {
      break;
    }
  }
};

if (subin !== sister) {
  if (subin > sister) {
    answer = subin - sister;
  } else if (sister === 0) {
    answer = subin;
  } else {
    const queue = [subin - 1, subin + 1, subin * 2];
    BFS(queue);
  }
} else {
  // 수빈과 동생의 위치가 같으면
  answer = 0;
}
console.log(answer);
