/*
빠른 정렬(퀵 정렬, Quick Sort)

장점
    - 운이 좋으면 빠르다. (운이 안 좋은 경우가 희박하기 때문에 사용된다. 빠르기로 유명한 합병 정렬보다 평균 두 배 빠르다.)
단점
    - 운이 나쁘면 느리다. (그러나 극복하는 방법 있음)
    - 같은 숫자들을 정렬한 경우 순서가 섞일 수 있다.
    (100이 3개가 있고 각각 1번 2번 3번 번호가 매겨져있을 때 퀵 정렬로 정렬하면 순서가 달라질 수 있다. 이 점을 고려해야 한다.)
*/

function quickSort(array, left = 0, right = array.length - 1) {
  if (left >= right) {
    return;
  }
  const mid = Math.floor((left + right) / 2);
  const pivot = array[mid];
  const partition = divide(array, left, right, pivot);
  quickSort(array, left, partition - 1);
  quickSort(array, partition, right);

  function divide(array, left, right, pivot) {
    while (left <= right) {
      while (array[left] < pivot) {
        left++;
      }
      while (array[right] > pivot) {
        right--;
      }

      if (left <= right) {
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        left++;
        right--;
      }
    }
    return left;
  }
  return array;
}
console.log(quickSort([1, 12, 5, 26, 7, 14, 3, 7]));
