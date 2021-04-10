/*
엄청나게 큰 수 A B가 주어졌을 때 둘의 합을 출력해야하는 문제

입력 : 9223372036854775807 9223372036854775808
출력 : 18446744073709551615

*/
let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split(' ');
const A = BigInt(input[0]);
const B = BigInt(input[1]);
let answer = A + B;
console.log(answer.toString());