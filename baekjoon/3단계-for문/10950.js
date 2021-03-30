/*
<제목> A+B-3

<문제>
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

<입력>
첫째 줄에 테스트 케이스의 개수 T가 주어진다.
각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

<출력>
각 테스트 케이스마다 A+B를 출력한다.

<예제 입력 1>
5
1 1
2 3
3 4
9 8
5 2

<예제 출력 1>
2
5
7
17
7

*/

//여러줄  입력시(n, input)
function solution(n, input) {
   for(let i = 0; i < n; i++){
       console.log(input[i][0] + input[i][1]);
   }
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
rl.on("line", function(line) {
    input.push(line);
    //rl.close()가 없어서 계속 입력
    //로컬에서 입력을 중지하려면 입력을 한 후 ctrl+d로 입력 종료
}).on("close", function() {
    let n = parseInt(input[0]);
    let list = [];
    for(let i = 1; i < input.length; i++){
        list.push(input[i].split(' ').map((el) => parseInt(el)));
    }
    solution(n, list);
    process.exit();
});