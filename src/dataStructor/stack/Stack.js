// 연결리스트(Linked List) 로 stack 구현
// Stack > LIFO
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  // 요소 추가
  push(value) {
    const node = new Node(value);
    // 추가된 노드 next 를 기존 top 으로 대체
    node.next = this.top;
    this.top = node;
    this.size += 1;
  }

  // top 요소 pop
  pop() {
    const value = this.top.value;
    this.top = this.top.next;
    this.size -= 1;
    return value;
  }

  getSize() {
    return this.size;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log('pop', stack.pop());
console.log('stack size', stack.getSize());
stack.push(4);
console.log('pop', stack.pop());
console.log('pop', stack.pop());
console.log('stack size', stack.getSize());
