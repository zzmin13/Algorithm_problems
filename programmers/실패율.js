function solution(N, stages) {
  let answer = [];
  const map = new Map();
  const failPercentMap = new Map();
  stages.sort((a, b) => a - b);
  for (let i = 0; i < stages.length; i++) {
    if (map.has(stages[i])) {
      map.set(stages[i], map.get(stages[i]) + 1);
    } else {
      map.set(stages[i], 1);
    }
  }

  if (map.has(N + 1)) {
    map.delete(N + 1);
  }

  for (let i = 1; i <= N; i++) {
    if (!map.has(i)) {
      map.set(i, 0);
    }
  }

  let wholeNumber = stages.length;
  map.forEach((value, key) => {
    const failNumber = value;
    const failPercent = failNumber / wholeNumber;
    if (failPercentMap.has(failPercent)) {
      failPercentMap.set(failPercent, [
        ...failPercentMap.get(failPercent),
        key,
      ]);
    } else {
      failPercentMap.set(failPercent, [key]);
    }
    wholeNumber = wholeNumber - failNumber;
  });
  answer = Array.from(failPercentMap).sort((a, b) => b[0] - a[0]);
  const results = [];
  for (let i = 0; i < answer.length; i++) {
    results.push(...answer[i][1]);
  }
  return results;
}
