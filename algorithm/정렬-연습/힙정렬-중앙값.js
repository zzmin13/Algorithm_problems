class Heap {
  constructor() {
    this.items = [];
  }

  // swap
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

  // peek
  peek() {
    return this.items[0];
  }
  // size
  size() {
    return this.items.length;
  }
}

class MinHeap extends Heap {
  // bubbleUp
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

  // bubbleDown
  bubbleDown() {
    let index = 0;
    while (
      (this.leftChild(index) !== undefined &&
        this.leftChild(index) < this.items[index]) ||
      this.rightChild(index) < this.items[index]
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

  // add
  add(item) {
    this.items[this.items.length] = item;
    this.bubbleUp();
  }

  // poll
  poll() {
    let item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubbleDown();
    return item;
  }

  // sort
  sort() {
    const sort = [];
    const count = this.items.length;
    for (let i = 0; i < count; i++) {
      sort.push(this.poll());
    }
    return sort;
  }
}

class MaxHeap extends MinHeap {
  // bubbleUp
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

  // bubbleDown
  bubbleDown() {
    let index = 0;
    while (
      (this.leftChild(index) !== undefined &&
        this.leftChild(index) > this.items[index]) ||
      this.rightChild(index) > this.items[index]
    ) {
      let largerIndex = this.leftChildIndex(index);
      if (
        this.rightChild(index) !== undefined &&
        this.rightChild(index) > this.items[largerIndex]
      ) {
        largerIndex = this.rightChildIndex(index);
      }
      this.swap(index, largerIndex);
      largerIndex = index;
    }
  }
}

class MedianHeap {
  constructor() {
    this.minHeap = new MinHeap();
    this.maxHeap = new MaxHeap();
  }
  add(value) {
    if (value > this.median()) {
      // value가 중앙값보다 크면 minHeap에 삽입
      this.minHeap.add(value);
    } else {
      this.maxHeap.add(value);
    }

    if (this.minHeap.size() - this.maxHeap.size() > 1) {
      this.maxHeap.add(this.minHeap.poll());
    }
    if (this.maxHeap.size() - this.minHeap.size() > 1) {
      this.minHeap.add(this.maxHeap.poll());
    }
  }
  median() {
    if (this.minHeap.size() === 0 && this.maxHeap.size() === 0) {
      return Number.NEGATIVE_INFINITY;
    } else if (this.minHeap.size() === this.maxHeap.size()) {
      // 최소힙과 최대힙의 사이즈가 같으면
      return (this.minHeap.peek() + this.maxHeap.peek()) / 2;
    } else if (this.minHeap.size() > this.maxHeap.size()) {
      return this.minHeap.peek();
    } else {
      return this.maxHeap.peek();
    }
  }
}

function findNthBigNumber(array, number) {
  const maxHeap = new MaxHeap();
  let answer;
  for (let i = 0; i < array.length; i++) {
    maxHeap.add(array[i]);
  }
  for (let j = 0; j < number; j++) {
    answer = maxHeap.poll();
  }
  return answer;
}

const array = [1, 6, 10, 20, 90, 4];
console.log(findNthBigNumber(array, 3));
