/*
<제목> N과 M (1)
<문제>
자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.
* 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열

<입력>
첫째 줄에 자연수 N과 M이 주어진다. (1 ≤ M ≤ N ≤ 8)

<출력>
한 줄에 하나씩 문제의 조건을 만족하는 수열을 출력한다.
중복되는 수열을 여러 번 출력하면 안되며, 각 수열은 공백으로 구분해서 출력해야 한다.
수열은 사전 순으로 증가하는 순서로 출력해야 한다.

<예제 입력 1>
3 1

<예제 출력 1>
1
2
3

<예제 입력 2>
4 2

<예제 출력 2>
1 2
1 3
1 4
2 1
2 3
2 4
3 1
3 2
3 4
4 1
4 2
4 3

*/

// const getPermutations = (array, selectNumber) => {
//   const results = [];
//   if (selectNumber === 1) {
//     return array.map((value) => [value]);
//   }
//   array.forEach((fixed, index, origin) => {
//     const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
//     const permutations = getPermutations(rest, selectNumber - 1);
//     const attached = permutations.map((permutation) => [fixed, ...permutation]);
//     results.push(...attached);
//   });
//   return results;
// };

// let fs = require("fs");
// let input = fs
//   .readFileSync("예제.txt")
//   .toString()
//   .trim()
//   .split(" ")
//   .map((element) => Number(element));
// const N = input[0];
// const M = input[1];
// const numbers = [];

// for (let i = 1; i <= N; i++) {
//   numbers.push(i);
// }

// const answer = getPermutations(numbers, M);
// for (let i = 0; i < answer.length; i++) {
//   console.log(answer[i].join(" "));
// }

const dfs = (cnt) => {
  if (cnt === M) {
    console.log(array.join(" "));
    return;
  }
  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      array[cnt] = i;
      dfs(cnt + 1);
      visited[i] = false;
    }
  }
};

let fs = require("fs");
let input = fs
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split(" ")
  .map((element) => Number(element));
const N = input[0];
const M = input[1];
const visited = new Array(N + 1).fill(false);
const array = [];
dfs(0);
