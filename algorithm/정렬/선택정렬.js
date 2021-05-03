/*
선택 정렬(Selection Sort) : 배열을 처음부터 훑어서 가장 작은 수를 제일 앞에 가져다 놓고,
그 다음 다시 배열을 훑어서 두번째로 작은 수를 두번째 칸에 가져다 놓는다. 계속 반복해서 끝까지 정렬한다.

시간 복잡도: O(n^2)
공간 복잡도: O(1) 

장점
    - in-place 알고리즘이므로 메모리가 절약된다(추가 메모리를 사용하지 않는다.)
    - 사람이 정렬을 하는 방법과 상당히 유사하므로 직관적이고 이해하기가 쉽다.
    - 구현하기가 쉽다.
단점
    - 최선의 경우에도, 최악의 경우에도 O(n^2)의 시간이 걸리므로 성능이 매우 떨어짐
    - 데이터가 중복되는 경우에도 위치가 바뀔 수 있음

*/

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    temp = array[minIndex];
    array[minIndex] = array[i];
    array[i] = temp;
  }
  return array;
}
console.log(selectionSort([5, 1, 4, 7, 2, 6, 8, 3]));
