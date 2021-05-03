/*
계수정렬(counting sort) : 범위 조건이 작은 경우에 한해서 굉장히 빠른 알고리즘
    시간복잡도 : O(n)
    * 그러나 범위가 크다면 그만큼의 배열 크기가 커지니까 공간 크기가 낭비된다.
*/

let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\n");
const size = Number(input[0]);
input.shift();
const numbers = input.map((element) => Number(element));
const max = Math.max(...numbers);

const array = new Array(max + 1);
array.fill(0);

for (let i = 0; i < numbers.length; i++) {
  array[numbers[i]]++;
}

for (let i = 0; i < array.length; i++) {
  if (array[i]) {
    for (let j = 0; j < array[i]; j++) {
      console.log(i);
    }
  }
}
