/*
<제목> 단어 정렬
<문제>
알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성하시오.

1. 길이가 짧은 것부터
2. 길이가 같으면 사전 순으로

<입력>
첫째 줄에 단어의 개수 N이 주어진다. (1 ≤ N ≤ 20,000)
둘째 줄부터 N개의 줄에 걸쳐 알파벳 소문자로 이루어진 단어가 한 줄에 하나씩 주어진다.
주어지는 문자열의 길이는 50을 넘지 않는다.

<출력>
조건에 따라 정렬하여 단어들을 출력한다. 단, 같은 단어가 여러 번 입력된 경우에는 한 번씩만 출력한다.

<예제 입력 1>
13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours

<예제 출력 1>
i
im
it
no
but
more
wait
wont
yours
cannot
hesitate

*/

let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\n");
const N = Number(input[0]);
input.shift();
let answer = "";
const set = new Set(input.map((element) => element.trim()));
input = [...set];
input.sort((a, b) => {
  if (a.length === b.length) {
    if (a < b) {
      // a보다 b가 더 나중에 나오는 글자면
      return -1;
    } else {
      return 1;
    }
  }
  return a.length - b.length;
});

for (let i = 0; i < input.length; i++) {
  answer += input[i] + "\n";
}

console.log(answer.trim());
