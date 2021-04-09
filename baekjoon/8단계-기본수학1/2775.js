/*
<제목> 부녀회장이 될테야
<문제>
평소 반상회에 참석하는 것을 좋아하는 주희는 이번 기회에 부녀회장이 되고 싶어 각 층의 사람들을 불러 모아 반상회를 주최하려고 한다.

이 아파트에 거주를 하려면 조건이 있는데,
“a층의 b호에 살려면 자신의 아래(a-1)층의 1호부터 b호까지 사람들의 수의 합만큼 사람들을 데려와 살아야 한다” 는 계약 조항을 꼭 지키고 들어와야 한다.

아파트에 비어있는 집은 없고 모든 거주민들이 이 계약 조건을 지키고 왔다고 가정했을 때,
주어지는 양의 정수 k와 n에 대해 k층에 n호에는 몇 명이 살고 있는지 출력하라.

단, 아파트에는 0층부터 있고 각층에는 1호부터 있으며, 0층의 i호에는 i명이 산다.

<입력>
첫 번째 줄에 Test case의 수 T가 주어진다. 그리고 각각의 케이스마다 입력으로 첫 번째 줄에 정수 k, 두 번째 줄에 정수 n이 주어진다.

<출력>
각각의 Test case에 대해서 해당 집에 거주민 수를 출력하라.

<제한>
1 ≤ k, n ≤ 14

<예제 입력 1>
2
1
3
2
3
<예제 출력 1>
6
10

*/
let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');
let number = Number(input[0]);
input.shift();

let k;
let n;
let array = [];

for(let i = 0; i < number*2 ; i=i+2){
    k = Number(input[i]);
    n = Number(input[i+1]);
    array.push([k,n]);
}

let lowerFloor = [];
let sum = 0;
for(let i = 0; i < array.length; i++){
    //k층 n호
    k = array[i][0];
    n = array[i][1];
    for(let j = 0; j <= k; j++){ //0층부터 k층까지
        lowerFloor[j] = [];
        for(let m = 1; m <= n; m++){ // 1호부터 n호까지
            if(j === 0){ //0층이라면
                lowerFloor[j].push(m);
            }else{ // j가 0이 아닐 때 
                sum += lowerFloor[j-1][m-1];
                lowerFloor[j].push(sum);
                if(m === n){
                    sum = 0;
                }
            }
        }
    }
    console.log(lowerFloor[k][n-1]);
}