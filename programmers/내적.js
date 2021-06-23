function solution(a, b) {
  let answer = 0;
  const length = a.length;
  for (let i = 0; i < length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}
