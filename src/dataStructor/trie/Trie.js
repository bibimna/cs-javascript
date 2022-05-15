class Node {
  constructor(value = '') {
    this.value = value;
    this.children = new Map();
  }
}

// 트라이 자료구조
/*
- 문자열을 저장하고 효율적으로 탐색하기 위한 트리 형태의 자료구조
- 검색어 자동완성, 사전 찾기 등에 응용될 수 있음
- 문자열을 탐색할 때 단순하게 비교하는 것보다 효율적으로 찾을 수 있음
- L이 문자열의 길이일 때 탐색, 삽입은 O(L) 만큼 걸림
- 대신 각 정점이 자식에 대한 링크를 전부 가지고 있기에 저장 공간을 더 많이 사용함
*/
class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let currentNode = this.root;

    for(const char of string) {
      if(!currentNode.children.has(char)) {
        currentNode.children.set(char, new Node(currentNode.value + char));
      }
      currentNode = currentNode.children.get(char);
    }
  }

  has(string) {
    let currentNode = this.root;
    for(const char of string) {
      if(!currentNode.children.has(char)) return false;
      currentNode = currentNode.children.get(char);
    }

    return true;
  }
}

const trie = new Trie();
trie.insert("cat");
trie.insert("can");

console.log('find cat', trie.has('cat'));
console.log('find can', trie.has('can'));
console.log('find cap', trie.has('cap'));