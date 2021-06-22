const arr = [1, 2, 3, 3, 3, 3, 4, 4];
function solution(arr) {
  const answer = [];
  const countArray = new Array(Math.max(...arr) + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    countArray[arr[i]]++;
  }
  const set = new Set(arr);

  set.forEach((value) => {
    if (countArray[value] > 1) {
      answer.push(countArray[value]);
    }
  });
  if (!answer.length) {
    answer.push(-1);
  }
  return answer;
}

console.log(solution(arr));
