function solution(absolutes, signs) {
  let answer = 0;
  const length = absolutes.length;
  for (let i = 0; i < length; i++) {
    if (signs[i]) {
      answer += absolutes[i];
    } else {
      answer += -absolutes[i];
    }
  }
  return answer;
}
