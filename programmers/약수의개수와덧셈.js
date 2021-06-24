function solution(left, right) {
  let answer = 0;
  for (let target = left; target <= right; target++) {
    let divisorNumber = 1;
    const divisors = [];
    while (true) {
      if (divisorNumber * divisorNumber > target) {
        break;
      } else {
        if (target % divisorNumber === 0) {
          if (Math.floor(target / divisorNumber) === divisorNumber) {
            divisors.push(divisorNumber);
          } else {
            divisors.push(divisorNumber);
            divisors.push(Math.floor(target / divisorNumber));
          }
        }
      }
      divisorNumber++;
    }

    if (divisors.length % 2 === 0) {
      // 약수의 개수가 짝수면 더하고
      answer += target;
    } else {
      // 약수의 개수가 홀수면 빼기
      answer -= target;
    }
  }
  return answer;
}
