const check = (standard, word) => {
  let diffCount = 0;
  for (let i = 0; i < word.length; i++) {
    if (standard[i] !== word[i]) {
      diffCount++;
    }
  }
  return diffCount <= 1 ? true : false;
};
const BFS = (begin, start, target, words) => {
  const visited = new Array(words.length).fill(0);
  const queue = [[begin, start]];
  let result = 0;
  let isBreak = false;

  while (queue.length) {
    const current = queue.shift();
    const string = current[0];
    const index = current[1];
    for (let i = 0; i < words.length; i++) {
      if (check(string, words[i]) && !visited[i]) {
        if (words[i] === target) {
          result = index + 1;
          isBreak = true;
          break;
        }
        queue.push([words[i], index + 1]);
        visited[i] = index + 1;
        result = visited[i];
      }
    }
    if (isBreak) {
      break;
    }
  }
  return result;
};
function solution(begin, target, words) {
  let answer;
  if (!words.includes(target)) {
    answer = 0;
  } else {
    answer = BFS(begin, 0, target, words);
  }
  return answer;
}

// const begin = "hit";
// const target = "cog";
// const words = ["hot", "dot", "dog", "lot", "log", "cog"];
const begin = "hot";
const target = "lot";
const words = ["hot", "dot", "dog", "lot", "log"];

console.log(solution(begin, target, words));
