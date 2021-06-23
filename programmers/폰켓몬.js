function solution(nums) {
  let answer = 0;
  const set = new Set(nums);
  let selectNumber = nums.length / 2;
  const kindNumber = set.size;
  answer = selectNumber >= kindNumber ? kindNumber : selectNumber;
  return answer;
}
