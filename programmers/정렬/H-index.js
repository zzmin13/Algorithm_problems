function solution(citations) {
  citations = citations.sort((a, b) => b - a);
  let index = 0;

  while (index + 1 <= citations[index]) {
    index++;
  }
  return index;
}
const citations = [0, 1, 2, 3, 7];
console.log(solution(citations));
