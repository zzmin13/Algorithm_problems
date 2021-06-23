/*
<제목> 소수찾기

<문제설명>
한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.
각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

<제한사항>
numbers는 길이 1 이상 7 이하인 문자열입니다.
numbers는 0~9까지 숫자만으로 이루어져 있습니다.
"013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.

<입출력 예>
numbers     return
"17"        3
"011"       2

<입출력 예 설명>
예제 #1
[1, 7]으로는 소수 [7, 17, 71]를 만들 수 있습니다.

예제 #2
[0, 1, 1]으로는 소수 [11, 101]를 만들 수 있습니다.
11과 011은 같은 숫자로 취급합니다.

*/

const getPermutations = (array, selectNumber) => {
  const results = [];
  if (selectNumber === 1) {
    return array.map((value) => [value]);
  }
  array.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);
    results.push(...attached);
  });
  return results;
};
function solution(numbers) {
  const answerArray = [];
  const numbersArray = numbers.split("");
  const numbersLength = numbersArray.length;
  for (let selectNumber = numbersLength; selectNumber > 0; selectNumber--) {
    const permutations = getPermutations(numbersArray, selectNumber);
    permutations.forEach((element) => {
      const target = Number(element.join(""));
      let divideNumber = 3;
      let prime = false;
      while (!prime) {
        if (target === 1 || target % 2 === 0) {
          if (target === 2) {
            // 2는 소수
            prime = true;
            break;
          } else {
            break;
          }
        } else {
          if (divideNumber * divideNumber <= target) {
            if (target % divideNumber === 0) {
              break;
            } else {
              divideNumber += 2;
            }
          } else {
            prime = true;
            break;
          }
        }
      }
      if (prime) {
        if (!answerArray.includes(target)) {
          answerArray.push(target);
        }
      }
    });
  }
  return answerArray.length;
}
const numbers = "17";
console.log(solution(numbers));
