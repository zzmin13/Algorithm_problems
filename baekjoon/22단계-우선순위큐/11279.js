/*
<제목> 최대 힙
<문제>
널리 잘 알려진 자료구조 중 최대 힙이 있다. 최대 힙을 이용하여 다음과 같은 연산을 지원하는 프로그램을 작성하시오.
1. 배열에 자연수 x를 넣는다.
2. 배열에서 가장 큰 값을 출력하고, 그 값을 배열에서 제거한다.
프로그램은 처음에 비어있는 배열에서 시작하게 된다.

<입력>
첫째 줄에 연산의 개수 N(1 ≤ N ≤ 100,000)이 주어진다.
다음 N개의 줄에는 연산에 대한 정보를 나타내는 정수 x가 주어진다.
만약 x가 자연수라면 배열에 x라는 값을 넣는(추가하는) 연산이고, x가 0이라면 배열에서 가장 큰 값을 출력하고 그 값을 배열에서 제거하는 경우이다.
입력되는 자연수는 231보다 작다.

<출력>
입력에서 0이 주어진 회수만큼 답을 출력한다. 만약 배열이 비어 있는 경우인데 가장 큰 값을 출력하라고 한 경우에는 0을 출력하면 된다.

<예제 입력 1>
13
0
1
2
0
0
3
2
1
0
0
0
0
0

<예제 출력 1>
0
2
1
3
2
1
0
0

*/

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

  // parentIndex
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // leftChildIndex
  leftChildIndex(index) {
    return index * 2 + 1;
  }

  // rightChildIndex
  rightChildIndex(index) {
    return index * 2 + 2;
  }

  // parent
  parent(index) {
    return this.items[this.parentIndex(index)];
  }

  // leftChild
  leftChild(index) {
    return this.items[this.leftChildIndex(index)];
  }

  // rightChild
  rightChild(index) {
    return this.items[this.rightChildIndex(index)];
  }

  peek() {
    return this.items[0];
  }
  size() {
    return this.items.length;
  }
}

class MaxHeap extends Heap {
  //bubbleUp
  bubbleUp() {
    let index = this.items.length - 1;
    while (
      this.parent(index) !== undefined &&
      this.parent(index) < this.items[index]
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
      (this.leftChild(index) > this.items[index] ||
        this.rightChild(index) > this.items[index])
    ) {
      let largerIndex = this.leftChildIndex(index);
      if (
        this.rightChild(index) !== undefined &&
        this.rightChild(index) > this.items[largerIndex]
      ) {
        largerIndex = this.rightChildIndex(index);
      }
      this.swap(index, largerIndex);
      index = largerIndex;
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
}
let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\n");
const N = Number(input[0]);
input.shift();
const maxheap = new MaxHeap();
const answer = [];

for (let i = 0; i < N; i++) {
  const target = Number(input[i]);
  if (target === 0) {
    if (maxheap.size() === 0) {
      answer.push(0);
    } else {
      answer.push(maxheap.poll());
    }
  } else {
    maxheap.add(target);
  }
}

console.log(answer.join("\n"));
