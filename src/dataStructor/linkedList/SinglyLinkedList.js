/*
* 연결리스트
* > 추가와 삭제가 반복되는 로직에서 유용
* > 각 요소를 포인터로 연결하여 관리하는 선형 자료구조
* > 각 요소를 노드라고 부르며 데이터 영역과 포인터 영역으로 구성됨
* > 메모리가 허용하는 한 요소 제한없이 추가 가능
* > 탐색시 O(n) 시간이 추가로 듬, 단순 요소 추가/제거는 O(1)
*/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// 단일 연결 리스트
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(value) {
    let curNode = this.head;
    // 순차적으로 연결된 노드 탐색
    while (curNode.value !== value) {
      curNode = curNode.next
    }

    return curNode;
  }

  // 요소 추가
  append(value) {
    const newNode = new Node(value);
    if(this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 마지막 요소 뒤에 추가
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // 삽입 (특정 노드 뒤에 추가)
  insert(node, value) {
    const newNode = new Node(value);
    newNode.next = node.next;
    node.next = newNode;
  }

  // 제거
  remove(value) {
    let prevNode = this.head;
    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }

    if(prevNode.next) prevNode.next = prevNode.next.next;
  }

  display() {
    let currNode = this.head;
    let displayString = '[';
    while (currNode !== null) {
      displayString += `${currNode.value}, `;
      currNode = currNode.next;
    }

    displayString = displayString.substring(0, displayString.length - 2);
    displayString += ']';
    console.log(displayString);
  }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.display();

console.log(linkedList.find(3));

linkedList.remove(3);
linkedList.display();
linkedList.insert(linkedList.find(2), 10);
linkedList.display();
