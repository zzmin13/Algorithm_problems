/*
<제목> 골드바흐의 추측

<문제>
1보다 큰 자연수 중에서  1과 자기 자신을 제외한 약수가 없는 자연수를 소수라고 한다.
예를 들어, 5는 1과 5를 제외한 약수가 없기 때문에 소수이다. 하지만, 6은 6 = 2 × 3 이기 때문에 소수가 아니다.
골드바흐의 추측은 유명한 정수론의 미해결 문제로, 2보다 큰 모든 짝수는 두 소수의 합으로 나타낼 수 있다는 것이다.
이러한 수를 골드바흐 수라고 한다. 또, 짝수를 두 소수의 합으로 나타내는 표현을 그 수의 골드바흐 파티션이라고 한다.
예를 들면, 4 = 2 + 2, 6 = 3 + 3, 8 = 3 + 5, 10 = 5 + 5, 12 = 5 + 7, 14 = 3 + 11, 14 = 7 + 7이다.
10000보다 작거나 같은 모든 짝수 n에 대한 골드바흐 파티션은 존재한다.
2보다 큰 짝수 n이 주어졌을 때, n의 골드바흐 파티션을 출력하는 프로그램을 작성하시오.
만약 가능한 n의 골드바흐 파티션이 여러 가지인 경우에는 두 소수의 차이가 가장 작은 것을 출력한다.

<입력>
첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고 짝수 n이 주어진다.

<출력>
각 테스트 케이스에 대해서 주어진 n의 골드바흐 파티션을 출력한다. 출력하는 소수는 작은 것부터 먼저 출력하며, 공백으로 구분한다.

<제한>
4 ≤ n ≤ 10,000

<예제 입력 1>
3
8
10
16

<예제 출력 1>
3 5
5 5
5 11

*/

let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split("\n");
const size = Number(input[0]);
let primeNumber;
let primeNumbers;
let answer;
let gap;
for(let i = 1; i <= size; i++){
    target = Number(input[i]);
    answer = [];
    primeNumbers = [];

    // 주어진 수보다 작은 소수의 집합을 구한다.
    for(let p = 1; p < target; p++){
        primeNumber = 3;
        if(p === 1){
            continue;
        }else if(p === 2){
            primeNumbers.push(p);
        }else if(p % 2 === 0){
            continue;
        }else{
            while(true){
                if(primeNumber * primeNumber <= p){
                    if(p % primeNumber === 0){
                        break;
                    }else{
                        primeNumber = primeNumber + 2;
                    }
                }else{
                    primeNumbers.push(p);
                    break;
                }
            }
        }
    }

    // 주어진 수 - 소수 = 소수인가? 를 따져서 answer 집합에 넣고, 두 소수간의 갭이 더 작은 답이 등장하면 그 값으로 갱신
    for(let k = 0; k < primeNumbers.length; k++){
        if(primeNumbers.includes(target - primeNumbers[k])){
            if(answer.length >= 1){
                newgap = Math.max(primeNumbers[k], target - primeNumbers[k]) - Math.min(primeNumbers[k], target - primeNumbers[k]);
                if(gap > newgap){
                    gap = newgap;
                    answer.pop();
                    answer.push([primeNumbers[k], target-primeNumbers[k]]);
                }
            }else{
                gap = Math.max(primeNumbers[k], target - primeNumbers[k]) - Math.min(primeNumbers[k], target - primeNumbers[k]);
                answer.push([primeNumbers[k], target-primeNumbers[k]]);
            }
        }
    }
    
    console.log(`${answer[0][0]} ${answer[0][1]}`);
}