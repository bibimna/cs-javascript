// 최소 신장 트리 (크루스칼)
// 신장 트리(spanning tree) 란 그래프 내에 모든 정점을 포함하는 최소 연결 부분 그래프
// 최소한의 간선으로 모든 정점이 연결되어야 함
// 모든 신장 트리 중 가중치의 값이 최소여야 함
// >> 결국 모든 선을 연결하는 알고리즘?
// 그리디 개념 사용
// 모든 그래프를 부분 집합으로 분리
// Cycle 이 발생하지 않도록 주의, Cycle 을 판단하기 위해 Union-Find 알고리즘 이용 가능


// Union-Find 알고리즘
// 서로소 집합을 구하기 위한 알고리즘(공통 원소가 없는 두 집합을 표현)
// 서로 다른 두 집합을 병합하는 연산 Union 과 원소가 어떤 집합에 속해있는지 판단하는 연산 Find 를 나타냄
// 보통 트리 구조로 구성
// 편의상 재귀로 구현 가능

// 가장 가중치가 낮은 간선부터 선택하는 것 == Greedy
// 각 원소가 같은 집합인지 확인하기 위한 알고리즘 == Union-Find
// 두 정점이 같은 집합에 속한다면 = Cycle

// 최상위 부모 찾기
function find(parent, x) {
  if (parent[x] === x) {
    return x;
  }

  return parent[x] = find(parent, parent[x]);
}

// 두 원소 합치기
function union(parent, a, b) {
  a = find(parent, a);
  b = find(parent, b);
  if (a < b) {
    parent[b] = a;
  } else {
    parent[a] = b;
  }
}

// 두 원소가 같은 집합인지 검사
function compare(parent, a, b) {
  a = find(parent, a);
  b = find(parent, b);
  return a === b;
}

function solution(n, costs) {
  let answer = 0;
  const sortedCosts = costs.sort((a, b) => a[2] - b[2]);
  const parent = Array.from({ length: n }, (_, i) => i);

  for (const [a, b, cost] of sortedCosts) {
    if (!compare(parent, a, b)) {
      answer += cost;
      union(parent, a, b);
    }
  }

  return answer;
}