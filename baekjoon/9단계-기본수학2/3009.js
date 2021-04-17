/*
<제목> 네 번째 점
<문제>
세 점이 주어졌을 때, 축에 평행한 직사각형을 만들기 위해서 필요한 네 번째 점을 찾는 프로그램을 작성하시오.

<입력>
세 점의 좌표가 한 줄에 하나씩 주어진다. 좌표는 1보다 크거나 같고, 1000보다 작거나 같은 정수이다.

<출력>
세 점의 좌표가 한 줄에 하나씩 주어진다. 좌표는 1보다 크거나 같고, 1000보다 작거나 같은 정수이다.

<예제 입력 1>
30 20
10 10
10 20

<예제 출력 1>
30 10

*/

let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split("\n");
let arrayX = [];
let arrayY = [];
let x;
let y;
for(let i = 0; i < 3; i++){
    arrayX.push(Number(input[i].split(" ")[0]));
    arrayY.push(Number(input[i].split(" ")[1]));
}
arrayX = arrayX.sort();
arrayy = arrayY.sort();

x = arrayX[1] === arrayX[0] ? arrayX[2] : arrayX[0];
y = arrayY[1] === arrayY[0] ? arrayY[2] : arrayY[0];

console.log(`${x} ${y}`);