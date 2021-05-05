/*
<제목> 통계학
<문제>
수를 처리하는 것은 통계학에서 상당히 중요한 일이다.
통계학에서 N개의 수를 대표하는 기본 통계값에는 다음과 같은 것들이 있다. 단, N은 홀수라고 가정하자.

산술평균 : N개의 수들의 합을 N으로 나눈 값
중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
최빈값 : N개의 수들 중 가장 많이 나타나는 값
범위 : N개의 수들 중 최댓값과 최솟값의 차이

N개의 수가 주어졌을 때, 네 가지 기본 통계값을 구하는 프로그램을 작성하시오.

<입력>
첫째 줄에 수의 개수 N(1 ≤ N ≤ 500,000)이 주어진다.
단, N은 홀수이다. 그 다음 N개의 줄에는 정수들이 주어진다.
입력되는 정수의 절댓값은 4,000을 넘지 않는다.

<출력>
첫째 줄에는 산술평균을 출력한다. 소수점 이하 첫째 자리에서 반올림한 값을 출력한다.
둘째 줄에는 중앙값을 출력한다.
셋째 줄에는 최빈값을 출력한다. 여러 개 있을 때에는 최빈값 중 두 번째로 작은 값을 출력한다.
넷째 줄에는 범위를 출력한다.

<예제 입력 1>
5
1
3
8
-2
2

<예제 출력 1>
2
2
1
10

<예제 입력 2>
1
4000

<예제 출력 2>
4000
4000
4000
0

<예제 입력 3>
5
-1
-2
-3
-1
-2

<예제 출력 3>
-2
-2
-1
2

*/

let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\n");
const N = Number(input[0]);
input.shift();
const result = [];
const array = new Array(8001);
array.fill(0);
for (let i = 0; i < N; i++) {
  let index = Number(input[i]) + 4000;
  array[index]++;
}
for (let j = 0; j < array.length; j++) {
  if (array[j] !== 0) {
    for (let k = 0; k < array[j]; k++) {
      result.push(j - 4000);
    }
  } else {
    continue;
  }
}
// 산술평균 : N개의 수들의 합을 N으로 나눈 값
function getAverage(array) {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += array[i];
  }
  return Math.round(sum / N);
}
// 중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
function getMedian(array) {
  const mid = Math.floor(array.length / 2);
  return array[mid];
}
// 최빈값 : N개의 수들 중 가장 많이 나타나는 값
function getMostValue(array) {
  const map = new Map();
  for (let i = 0; i < N; i++) {
    if (!map.has(array[i])) {
      map.set(array[i], 1);
    } else {
      map.set(array[i], map.get(array[i]) + 1);
    }
  }
  let maxValue = 0;
  let answer = [];
  map.forEach((element, key) => {
    // forEach(값, 키, map 객체 자체)
    if (maxValue < element) {
      maxValue = element;
      answer = [];
      answer.push(key);
      // answer = key;
    } else if (maxValue === map.get(key)) {
      answer.push(key);
    }
  });
  return answer.length !== 1 ? answer[1] : answer[0];
}
// 범위 : N개의 수들 중 최댓값과 최솟값의 차이
function getRange(array) {
  return array[array.length - 1] - array[0];
}

console.log(getAverage(result));
console.log(getMedian(result));
console.log(getMostValue(result));
console.log(getRange(result));
