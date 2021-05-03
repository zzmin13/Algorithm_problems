/*
거품 정렬(Bubble sort) : 전체 배열을 순회하면서 항목이 다른 항목보다 큰 경우 두 항목을 교환한다.
시간 복잡도 : O(n^2)
공간 복잡도 : O(1)
장점
    - in-place 알고리즘이기 때문에 메모리가 절약된다. 
    - 구현하기가 쉬움
단점
    - 다른 알고리즘은 이미 정렬된 부분을 활용하는데 비해 거품 정렬은 모든 가능한 짝을 비교하기 때문에 성능이 안좋은 정렬 중에서도 가장 안좋은 정렬
*/
function bubbleSort(array) {
  let temp;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
console.log(bubbleSort([5, 4, 3, 2, 1]));
