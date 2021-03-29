/*
<제목> 사분면 고르기

<문제>
흔한 수학 문제 중 하나는 주어진 점이 어느 사분면에 속하는지 알아내는 것이다.
사분면은 아래 그림처럼 1부터 4까지 번호를 갖는다. "Quadrant n"은 "제n사분면"이라는 뜻이다.
예를 들어, 좌표가 (12, 5)인 점 A는 x좌표와 y좌표가 모두 양수이므로 제1사분면에 속한다.
점의 좌표를 입력받아 그 점이 어느 사분면에 속하는지 알아내는 프로그램을 작성하시오. 단, x좌표와 y좌표는 모두 양수나 음수라고 가정한다.

<입력>
첫 줄에는 정수 x가 주어진다. (−1000 ≤ x ≤ 1000; x ≠ 0)
다음 줄에는 정수 y가 주어진다. (−1000 ≤ y ≤ 1000; y ≠ 0)

<출력>
점 (x, y)의 사분면 번호(1, 2, 3, 4 중 하나)를 출력한다.

<예제 입력 1>
12
5
<예제 출력 1>
1

<예제 입력 2>
9
-13
<예제 출력 2>
4

*****************
(a,b)라고 할 때
1사분면 : + +
2사분면 : - +
3사분면 : - -
4사분면 : + -
*/

function solution(x,y) {
    let answer;
    if(x > 0){ // x가 양수일 때
        if(y > 0){
            answer = 1; // + + => 1사분면
        }else{
            answer = 4; // + - => 4사분면
        }
    }else{// x가 음수일 때
        if(y < 0){
            answer = 3; // - - => 3사분면
        }else{
            answer = 2; // - + => 2사분면
        }
    }
    console.log(answer);
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
rl.on("line", function(line) {
    input.push(line)
    //rl.close()가 없어서 계속 입력
    //로컬에서 입력을 중지하려면 입력을 한 후 ctrl+d로 입력 종료
}).on("close", function() {
    let list1 = parseInt(input[0]);
    let list2 = parseInt(input[1]);
    solution(list1, list2);
    process.exit();
});