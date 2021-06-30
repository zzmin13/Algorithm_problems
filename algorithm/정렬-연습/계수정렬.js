function solution(numbers) {
  const max = Math.max(...numbers);
  const array = new Array(max + 1).fill(0);
  const answer = [];
  for (let i = 0; i < numbers.length; i++) {
    array[numbers[i]]++;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      for (let j = 0; j < array[i]; j++) {
        answer.push(i);
      }
    }
  }
  return answer;
}
const numbers = [5, 2, 3, 1, 4, 2, 3, 5, 1, 7];
console.log(solution(numbers));

// 계수 정렬은 o(n) 시간복잡도를 가지지만 메모리가 낭비되고 정렬해야할 수의 범위가 적을 때에만 유리하다!
