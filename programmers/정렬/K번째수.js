function solution(array, commands) {
  const answer = [];
  for (let index = 0; index < commands.length; index++) {
    let i = commands[index][0];
    let j = commands[index][1];
    let k = commands[index][2];
    let sliceArray = array.slice(i - 1, j);
    sliceArray.sort((a, b) => a - b);
    answer.push(sliceArray[k - 1]);
  }
  return answer;
}

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
]; // [i,j,k] -> i부터 j까지 자르고 k번째 수
console.log(solution(array, commands)); //  [5,6,3]
