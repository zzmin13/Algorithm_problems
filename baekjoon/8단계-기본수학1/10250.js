/*
<제목> ACM 호텔
https://www.acmicpc.net/problem/10250

<예제 입력 1>
2
6 12 10
30 50 72
<예제 출력 1>
402
1203
*/

let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let count = Number(input[0]);
let height;
let width;
let N;
// x층y호라고 한다면? 1층 1호의 경우 = 101호
let x; 
let y;
let str;
for(let i = 1; i <= count; i++){
    input[i] = input[i].split(" ");
    height = Number(input[i][0]);
    width = Number(input[i][1]);
    N = Number(input[i][2]);

    if(N < height){
        x = N;
        y = 1;

    }else if(N % height === 0){
        x = height;
        y = Math.floor(N / height);

    }else{
        x = N % height;
        y = 1 + Math.floor(N / height);
    }
    
    if(y < 10){
        str = `${x}0${y}`;
    }else{
        str = `${x}${y}`;
    }
    console.log(Number(str));
}