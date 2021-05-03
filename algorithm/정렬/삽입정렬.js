/*
삽입 정렬(Insertion Sort) : 배열을 순차적으로 검색하면서 정렬되지 않은 항목들을 배열의 왼쪽의 정렬된 부분으로 이동시키는 정렬
시간 복잡도
    -best : O(n)
    -worst: O(n^2)
공간 복잡도 
    - O(1) : in place, 배열 안에서 정렬하므로 메모리가 절약된다
장점 : 배열 안에서 정렬하므로 메모리가 절약된다
단점: 자료의 개수가 많아지면 성능이 떨어짐

*/
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let temp = array[i];
    let leftIndex = i - 1;
    while (leftIndex >= 0 && array[leftIndex] > temp) {
      array[leftIndex + 1] = array[leftIndex];
      array[leftIndex] = temp;
      temp = array[leftIndex];
      leftIndex--;
      console.log(array);
    }
    console.log(`✅${array.toString()}`);
  }
  return array;
}
console.log(insertionSort([5, 6, 1, 2, 4, 3]));
