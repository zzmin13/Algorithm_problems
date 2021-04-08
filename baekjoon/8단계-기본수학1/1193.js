/*
<제목> 분수찾기
<문제>
무한히 큰 배열에 다음과 같이 분수들이 적혀있다.

1/1	1/2	1/3	1/4	1/5	…
2/1	2/2	2/3	2/4	…	…
3/1	3/2	3/3	…	…	…
4/1	4/2	…	…	…	…
5/1	…	…	…	…	…
…	…	…	…	…	…

이와 같이 나열된 분수들을 1/1 -> 1/2 -> 2/1 -> 3/1 -> 2/2 -> … 과 같은 지그재그 순서로 차례대로 1번, 2번, 3번, 4번, 5번, … 분수라고 하자.
X가 주어졌을 때, X번째 분수를 구하는 프로그램을 작성하시오.

<입력>
첫째 줄에 X(1 ≤ X ≤ 10,000,000)가 주어진다.

<출력>
첫째 줄에 분수를 출력한다.

<예제 입력 1>
14
<예제 출력 1>
2/4
*/

let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString();

const X = Number(input);
let firstNumerator; // 첫번째 항의 분자
let firstDenominator; // 첫번째 항의 분모
let answer; // 정답 문자열
let answerNumerator; // 정답 분자
let answerDenominator; // 정답 분모

let sum = 0;
let count = 1;

while(true){ // 주어진 숫자가 몇 행에 있는지 알기 위함
    sum = sum + count;
    if(sum >= X){
        break;
    }
    count++;
}

let row = count; // row : 행
let firstNumber = sum - count + 1; // row행 0열 (첫번째 항)
let col = X - firstNumber; // row행 col열


if(row % 2 === 0){// 짝수행이면 첫 항이 1/n
    firstNumerator = 1; // 분자 = 1
    firstDenominator = row; // 분모 = row
    answerNumerator = firstNumerator + col; // 분자 + col
    answerDenominator = firstDenominator - col; // 분모 - col
}else{ // 홀수행이면 첫 항이 n/1
    firstNumerator = row;
    firstDenominator = 1;
    answerNumerator = firstNumerator - col;
    answerDenominator = firstDenominator + col;
}

answer = `${answerNumerator}/${answerDenominator}`;
console.log(answer);