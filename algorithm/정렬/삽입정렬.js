const insertionSort = (array) => {
  let i, j, temp;
  for (i = 1; i < array.length; i++) {
    temp = array[i];
    for (j = i - 1; j >= 0 && temp < array[j]; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
};
console.log(insertionSort([5, 6, 1, 2, 4, 3]));
