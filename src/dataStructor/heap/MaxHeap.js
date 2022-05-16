// 최대값이 최상위 루트 노드에 존재하는 Heap

export default class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length === 2) return this.heap.pop(); // 루트 정점만 남은 경우

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;
    while (this.heap[currentIndex] < this.heap[leftIndex] ||
    this.heap[currentIndex] < this.heap[rightIndex]) {
      const temp = this.heap[currentIndex];
      const resultIndex = (this.heap[leftIndex] < this.heap[rightIndex]) ? rightIndex : leftIndex;

      this.heap[currentIndex] = this.heap[resultIndex];
      this.heap[resultIndex] = temp;

      currentIndex = resultIndex;
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}
// Heap 요소 추가
const heap = new MaxHeap()
heap.push(45);
heap.push(36);
heap.push(11);
heap.push(54);
heap.push(33);
console.log('heap', heap.heap);

// Heap 요소 제거
const popNodeArr = [];
popNodeArr.push(heap.pop());
popNodeArr.push(heap.pop());
popNodeArr.push(heap.pop());
popNodeArr.push(heap.pop());
popNodeArr.push(heap.pop());
console.log('pop list', popNodeArr);