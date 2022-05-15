import { MaxHeap } from './dataStructor';
// Heap 요소 추가
const maxHeap = new MaxHeap()
maxHeap.push(45);
maxHeap.push(36);
maxHeap.push(11);
maxHeap.push(54);
maxHeap.push(33);
console.log('heap', maxHeap.heap);

// Heap 요소 제거
const popNodeArr = [];
popNodeArr.push(maxHeap.pop());
popNodeArr.push(maxHeap.pop());
popNodeArr.push(maxHeap.pop());
popNodeArr.push(maxHeap.pop());
popNodeArr.push(maxHeap.pop());
console.log('pop list', popNodeArr);


