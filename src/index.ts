import { Heap } from './dataStructor';
// Heap 요소 추가
const heap = new Heap()
heap.push(45);
heap.push(36);
heap.push(11);
heap.push(54);
heap.push(33);
console.log('heap', heap.nodes);

// Heap 요소 제거
const popNodeArr = [];
popNodeArr.push(heap.pop());
popNodeArr.push(heap.pop());
popNodeArr.push(heap.pop());
popNodeArr.push(heap.pop());
popNodeArr.push(heap.pop());
console.log('pop list', popNodeArr);


