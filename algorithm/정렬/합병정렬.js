/*
합병정렬(병합정렬, Merge Sort)
    - 분할 정복 알고리즘에 속함: 어떤 문제를 그대로 해결할 수 없을 때 작은 문제로 분할해서 푸는 방법


시간복잡도 : O(NlogN) (최선이든 최악이든 같음)

장점
    - 최선의 경우에도 최악의 경우에도 O(NlogN)이기 때문에 데이터 분포에 영향을 덜 받는다.
    (어떤 경우에도 좋은 성능을 보장할 수 있음)
    - 중복된 데이터의 순서가 바뀌지 않는 stable한 정렬

단점
    - 30개 이하의 숫자를 정렬할 때에는 삽입 정렬과 별 차이도 없음
    - 정렬하는데 추가 메모리가 필요함 (in-place 알고리즘이 아님)

*/

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  let pivot = Math.floor(array.length / 2);
  let left = array.slice(0, pivot);
  let right = array.slice(pivot, array.length);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}
const array = [5, 2, 4, 7, 6, 1, 3, 8];
console.log(mergeSort(array));
