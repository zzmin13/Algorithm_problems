/*
<제목> 단어 공부
<문제>
알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오.
단, 대문자와 소문자를 구분하지 않는다.
<입력>
첫째 줄에 알파벳 대소문자로 이루어진 단어가 주어진다. 주어지는 단어의 길이는 1,000,000을 넘지 않는다.
<출력>
첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다. 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.

<예제 입력 1>
Mississipi
<예제 출력 1>
?

<예제 입력 2>
zZa
<예제 출력 2>
Z

<예제 입력 3>
z
<예제 출력 3>
Z

<예제 입력 4>
baaa
<예제 출력 4>
A
*/

let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString();
let array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
//           A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
let alphabet;
for(let i = 0; i < input.length; i++){
    alphabet = input.charAt(i).toUpperCase();
    array[alphabet.charCodeAt(0) - 65]++;
}

let max = 0;
let maxString = '';

for(let j = 0; j < array.length; j++){
    if(array[j] >= max){
        if(array[j] === max){
            max = array[j];
            maxString += String.fromCharCode(65 + j);
        }else if(array[j] > max){
            max = array[j];
            maxString = String.fromCharCode(65 + j);
        }
    }

}

if(maxString.length > 1){
    console.log(`?`);
}else if(maxString.length === 1){
    console.log(maxString);
}

