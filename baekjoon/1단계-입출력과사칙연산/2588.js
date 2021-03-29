/*

<문제>
(세자리 수) x (세자리 수)는 다음과 같은 과정을 통하여 이루어진다.
         4 7 2 ····· (1)
       x 3 8 5 ····· (2)
---------------
       2 3 6 0 ····· (3)
     3 7 7 6   ····· (4)
   1 4 1 6     ····· (5)
---------------
   1 8 1 7 2 0 ····· (6)
(1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.

<입력>
첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.

<출력>
첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.

<예제 입력1>
472
385

<예제 출력1>
2360
3776
1416
181720

*/

function solution(input1, input2) {
    const hundred = Math.floor(input2 / 100); // 100의 자리 숫자
    const ten = Math.floor((input2 % 100) / 10); // 10의 자리 숫자
    const one = input2 % 10; // 1의 자리 숫자

    const line3 = input1 * one;
    const line4 = input1 * ten;
    const line5 = input1 * hundred;
    const line6 = input1 * input2;

    console.log(line3);
    console.log(line4);
    console.log(line5);
    console.log(line6);
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