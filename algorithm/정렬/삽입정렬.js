function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let temp = array[i];
    let left = i - 1;
    while (left >= 0 && array[left] > temp) {
      array[left + 1] = array[left];
      array[left] = temp;
      temp = array[left];
      left--;
    }
  }
  return array;
}
console.log(insertionSort([5, 6, 1, 2, 4, 3]));
