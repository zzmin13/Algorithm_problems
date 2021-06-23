function solution(people, limit) {
  let boat = 0;
  people.sort((a, b) => b - a);
  let left = 0;
  let right = people.length - 1;

  while (left < right) {
    if (people[left] + people[right] > limit) {
      left++;
    } else {
      left++;
      right--;
    }
    boat++;
  }
  if (left === right) boat++;
  return boat;
}
