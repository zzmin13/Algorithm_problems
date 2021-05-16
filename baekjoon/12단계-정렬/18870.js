// 이 코드는 런타임에러(TypeError)가 난다 그래도 코드는 돌아가긴 하는데,,
/*
<제목> 좌표 압축
<문제>
수직선 위에 N개의 좌표 X1, X2, ..., XN이 있다. 이 좌표에 좌표 압축을 적용하려고 한다.
Xi를 좌표 압축한 결과 X'i의 값은 Xi > Xj를 만족하는 서로 다른 좌표의 개수와 같아야 한다.
X1, X2, ..., XN에 좌표 압축을 적용한 결과 X'1, X'2, ..., X'N를 출력해보자.

<입력>
첫째 줄에 N이 주어진다.
둘째 줄에는 공백 한 칸으로 구분된 X1, X2, ..., XN이 주어진다.

<출력>
첫째 줄에 X'1, X'2, ..., X'N을 공백 한 칸으로 구분해서 출력한다.

<제한>
1 ≤ N ≤ 1,000,000
-109 ≤ Xi ≤ 109

<예제 입력 1>
5
2 4 -10 4 -9

<예제 출력 1>
2 3 0 3 1

<예제 입력 2>
6
1000 999 1000 999 1000 999

<예제 출력 2>
1 0 1 0 1 0

*/
let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\n");
const n = Number(input[0]);
input = input[1].split(" ").map((element, index) => [index, Number(element)]);

const divide = (array, left, right, pivot) => {
  while (left <= right) {
    while (array[left][1] < pivot[1]) {
      left++;
    }
    while (array[right][1] > pivot[1]) {
      right--;
    }
    if (left <= right) {
      let temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left++;
      right--;
    }
  }
  return left;
};

const quickSort = (array, left = 0, right = array.length - 1) => {
  if (left >= right) {
    return;
  }
  const mid = Math.floor((left + right) / 2);
  const pivot = array[mid];
  const partition = divide(array, left, right, pivot);

  quickSort(array, left, partition - 1);
  quickSort(array, partition, right);

  return array;
};

input = quickSort(input);

// 퀵정렬한 input을 가지고 자신보다 작은 수를 계산하여 넣기
let currentSmallNumber;
let count = 0;
for (let i = 0; i < n; i++) {
  if (i === 0) {
    input[i].push(count);
  } else {
    currentSmallNumber = input[i - 1][1];
    if (input[i][1] > currentSmallNumber) {
      count++;
    }
    input[i].push(count);
  }
}

// 이제 input을 input[i][0] (인덱스) 을 기준으로 정렬하기
input.sort((a, b) => {
  return a[0] - b[0];
});

// 인덱스 기준으로 정렬한 input은 input[i][2]가 자신보다 작은 수의 개수가 된다.
let answer = "";
for (let i = 0; i < n; i++) {
  answer += input[i][2] + " ";
}
console.log(answer);
