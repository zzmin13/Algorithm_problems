/*
<제목> 수 정렬하기 2
<문제>
N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

<입력>
첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 숫자가 주어진다.
이 수는 절댓값이 1,000,000보다 작거나 같은 정수이다. 수는 중복되지 않는다.

<출력>
첫째줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.

<예제 입력 1>
5
5
4
3
2
1

<예제 출력 1>
1
2
3
4
5

*/

let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\n");
const size = Number(input[0]);
class Heap {
  constructor() {
    this.items = [];
  }
  //swap
  swap(index1, index2) {
    let temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
  }
  //parentIndex
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  //leftChildIndex
  leftChildIndex(index) {
    return index * 2 + 1;
  }

  //rightChildIndex
  rightChildIndex(index) {
    return index * 2 + 2;
  }

  //parent
  parent(index) {
    return this.items[this.parentIndex(index)];
  }

  //leftChild
  leftChild(index) {
    return this.items[this.leftChildIndex(index)];
  }

  //rightChild
  rightChild(index) {
    return this.items[this.rightChildIndex(index)];
  }

  //peek
  peek() {
    return this.items[0];
  }

  size() {
    return this.items.length;
  }
}
class MinHeap extends Heap {
  //bubbleUp
  bubbleUp() {
    let index = this.items.length - 1;
    while (
      this.parent(index) !== undefined &&
      this.parent(index) > this.items[index]
    ) {
      this.swap(index, this.parentIndex(index));
      index = this.parentIndex(index);
    }
  }

  //bubbleDown
  bubbleDown() {
    let index = 0;
    while (
      this.leftChild(index) !== undefined &&
      (this.leftChild(index) < this.items[index] ||
        this.rightChild(index) < this.items[index])
    ) {
      let smallerIndex = this.leftChildIndex(index);
      if (
        this.rightChild(index) !== undefined &&
        this.rightChild(index) < this.items[smallerIndex]
      ) {
        smallerIndex = this.rightChildIndex(index);
      }
      this.swap(index, smallerIndex);
      index = smallerIndex;
    }
  }

  //add
  add(item) {
    this.items[this.items.length] = item;
    this.bubbleUp();
  }
  //poll
  poll() {
    let item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubbleDown();
    return item;
  }

  //sort
  sort() {
    let sort = [];
    const count = this.items.length;
    for (let i = 0; i < count; i++) {
      sort.push(this.poll());
    }
    return sort;
  }
}

const minheap = new MinHeap();
for (let i = 1; i <= size; i++) {
  minheap.add(Number(input[i]));
}
console.log(minheap.sort().join("\n"));
