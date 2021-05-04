const array = [5, 1, 4, 7, 2, 6, 8, 3];

// 선택 정렬
const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let temp = array[i];
    let minIndex = i;
    for (let j = i; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
};

console.log(selectionSort(array));
