/*
문제 : 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력 : 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)
출력 : 첫째 줄에 A+B를 출력한다.

예제 입력 1 : 1 2
예제 출력 1 : 3
*/

function solution(input){
    const [a,b] = input;
    const answer = a+b;
    console.log(answer);
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