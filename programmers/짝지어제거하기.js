function solution(string) {
  let answer;
  let index = 0;
  const stack = [];
  for (let i = 0; i < string.length; i++) {
    stack.push(string[i]);
    if (stack[stack.length - 1] === stack[stack.length - 2]) {
      stack.pop();
      stack.pop();
    }
  }
  answer = stack.length ? 0 : 1;
  return answer;
}
