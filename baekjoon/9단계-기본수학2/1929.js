/*
<제목> 소수 구하기
<문제>
M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.

<입력>
첫째 줄에 자연수 M과 N이 빈 칸을 사이에 두고 주어진다. (1 ≤ M ≤ N ≤ 1,000,000) M이상 N이하의 소수가 하나 이상 있는 입력만 주어진다.

<출력>
한 줄에 하나씩, 증가하는 순서대로 소수를 출력한다.

<예제 입력 1>
3 16
<예제 출력 1>
3
5
7
11
13


*/

let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split(' ');
const M = Number(input[0]);
const N = Number(input[1]);
let primeNumbers = [];
let primeNumber;

for(let target = M; target <= N; target++){
    primeNumber = 3;
    if(target === 2){
        primeNumbers.push(target);
    }
    if(target % 2 === 1 && target !== 1){
        while(true){
            if(primeNumber * primeNumber <= target){
                if(target % primeNumber !== 0){
                    primeNumber = primeNumber + 2;
                }else{
                    break;
                }
            }else{
                primeNumbers.push(target);
                break;
            }
        }
    }

}
console.log(primeNumbers.join("\n"));