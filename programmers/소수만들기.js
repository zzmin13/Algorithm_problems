const getCombinations = (array, selectNumber) => {
  const results = [];
  if (selectNumber === 1) {
    return array.map((value) => [value]);
  }
  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });
  return results;
};
function solution(nums) {
  let answer = 0;
  const combinations = getCombinations(nums, 3);
  for (let i = 0; i < combinations.length; i++) {
    const target = combinations[i].reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    let primeNumber = 3;
    while (true) {
      if (target === 1 || target % 2 === 0) {
        if (target === 2) {
          answer++;
          break;
        } else {
          // 소수가 아님
          break;
        }
      } else {
        if (primeNumber * primeNumber <= target) {
          if (target % primeNumber === 0) {
            // 소수가 아님
            break;
          } else {
            primeNumber += 2;
          }
        } else {
          answer++;
          break;
        }
      }
    }
  }

  return answer;
}
