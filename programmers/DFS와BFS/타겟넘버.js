function solution(numbers, target) {
  const DFS = (sum, level, array) => {
    if (level === numbers.length - 1) {
      if (sum === target) {
        answer.push(array);
      }
      return;
    }
    DFS(sum + numbers[level + 1], level + 1, [...array, numbers[level + 1]]);
    DFS(sum - numbers[level + 1], level + 1, [...array, -numbers[level + 1]]);
  };
  const answer = [];
  DFS(numbers[0], 0, [numbers[0]]);
  DFS(-numbers[0], 0, [-numbers[0]]);

  return answer.length;
}
const numbers = [1, 1, 1, 1, 1];
const target = 1;
console.log(solution(numbers, target));
