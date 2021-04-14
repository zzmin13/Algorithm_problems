/*
<제목> 소수 찾기
<문제>
주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.

<입력>
첫 줄에 수의 개수 N이 주어진다. N은 100이하이다. 다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수이다.

<출력>
주어진 수들 중 소수의 개수를 출력한다.

<예제 입력 1>
4
1 3 5 7
<예제 출력 1>
3

*/

// 소수: 1과 자기자신만을 약수로 갖는 수 (즉, 약수가 2개)
// 1은 소수가 아님
let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');
let n = Number(input[0]);
let numbers = input[1].split(" ").map((element) => Number(element));
let primeNumbers = [];
let primeNumber;

for(let i = 0; i < n; i++){
    primeNumber = 3;
    while(true){
        if(numbers[i] === 1 || numbers[i] % 2 === 0){ // 1과 2가 아닌 짝수는 소수임
            if(numbers[i] === 2){ // 2는 소수
                primeNumbers.push(numbers[i]);
                break;
            }
            break;
        }else{
               if(primeNumber*primeNumber <= numbers[i]){
                   if(numbers[i] % primeNumber === 0){
                        break;
                   }else{
                        primeNumber = primeNumber + 2;
                   }
               }else{ // 소수인 경우
                    primeNumbers.push(numbers[i]);
                    break;
               }
        }
    }
}
console.log(primeNumbers.length);