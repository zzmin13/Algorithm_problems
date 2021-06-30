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

const maxheap = new MaxHeap();
maxheap.add(1);
maxheap.add(10);
maxheap.add(0);
maxheap.add(5);
maxheap.add(100);
maxheap.add(-10);
maxheap.add(8);
console.log(maxheap); //array(5) [1, 8, 5, 100, 10]

console.log(maxheap.sort());
