function solution(n) {
  let answer = 0;

  const threeDigit = (decimalNumber) => {
    const queue = [];
    while (decimalNumber !== 0) {
      let remainder = decimalNumber % 3;
      queue.unshift(remainder);
      decimalNumber = Math.floor(decimalNumber / 3);
    }
    return queue;
  };
  const threeNumberReverse = threeDigit(n).reverse(); // [0,0,2,1]

  let index = 0;
  for (let i = threeNumberReverse.length - 1; i >= 0; i--) {
    answer += threeNumberReverse[i] * Math.pow(3, index);
    index++;
  }
  return answer;
}
