/*
<문제>
(A+B)%C는 ((A%C) + (B%C))%C 와 같을까?

(A×B)%C는 ((A%C) × (B%C))%C 와 같을까?

세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.

<입력>
첫째 줄에 A, B, C가 순서대로 주어진다. (2 ≤ A, B, C ≤ 10000)

<출력>
첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.

<예제 입력 1>
5 8 4

<예제 출력 1>
1
1
0
0

*/

function solution(input){
    const [a,b,c] = input;
    const answer1 = (a+b) % c;
    const answer2 = ((a % c) + (b % c)) % c
    const answer3 = (a * b) % c
    const answer4 = ((a % c) * (b % c)) % c

    console.log(answer1);
    console.log(answer2);
    console.log(answer3);
    console.log(answer4);
}
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input;
let list = [];
rl.on('line', function(line) {
    input = line;
    rl.close();
}).on("close", function() {
    // list = input.split(' ').map((el) => el); 
    list = input.split(' ').map((el) => parseInt(el)); // 입력값이 정수라면 parseInt로 형 변환
    solution(list);
    process.exit();
});