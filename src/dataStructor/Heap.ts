export default class Heap {
  public nodes: number[];

  constructor() {
    this.nodes = [-1];
  }

  // 요소 추가
  push(value: number) {
    this.nodes.push(value);
    let currentIndex = this.nodes.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    // 1. 최하위 노드로 요소추가
    // 2. 부모 노드와 비교하며 큰 값이 없을 때 까지 반복
    while (parentIndex && this.nodes[parentIndex] < value) {
      const temp = this.nodes[parentIndex];
      this.nodes[parentIndex] = value;
      this.nodes[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2)
    }
  }

  // 요소 삭제
  pop() {
    if(this.nodes.length === 1) return;

    // 1. 루트 노드 상수에 저장
    // 2. 마지막 노드를 루트 노드로 변경
    const returnValue = this.nodes[1];
    const popVal = this.nodes.pop();
    if(popVal) this.nodes[1] = popVal;

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    // 마지막 노드 = 루트 노드
    // 루트 노드 > 자식이랑 비교 하면서 재 위치 시킴
    while (
      this.nodes[currentIndex] < this.nodes[leftIndex] ||
      this.nodes[currentIndex] < this.nodes[rightIndex]
    ){
      const temp = this.nodes[currentIndex];
      const resultIndex = (this.nodes[leftIndex] < this.nodes[rightIndex]) ? rightIndex : leftIndex

      this.nodes[currentIndex] = this.nodes[resultIndex];
      this.nodes[resultIndex] = temp;
      currentIndex = resultIndex;

      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}