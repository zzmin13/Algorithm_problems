/*
<제목> 최소, 최대
<문제>
N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.
<입력>
첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다.
모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.
<출력>
첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.

<예제 입력 1>
5
20 10 35 30 7
<예제 출력 1>
7 35
*/

let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let N = Number(input[0]); // N = 5
let numbers = input[1].split(" "); // numbers = ['20', '10', '35', '30', '7']
//최댓값과 최솟값을 첫번째 원소로 초기화
let min = Number(numbers[0]);
let max = Number(numbers[0]); 

for(let i = 1; i < N; i++){
    if(Number(numbers[i]) < min){
        min = Number(numbers[i]);
    }
    if(Number(numbers[i]) > max){
        max = Number(numbers[i]);
    }
}
console.log(`${min} ${max}`);
//sort 메소드를 써서 그냥 맨 앞 값이랑 맨 뒷 값을 뽑는게 더 코드는 간단할 듯 하다.  