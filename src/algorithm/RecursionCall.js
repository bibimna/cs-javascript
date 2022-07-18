/*
* 재귀 함수는 자기 자신을 호출하는 함수
* 함수 호출은 Call Stack 에 쌓이기 때문에 스택 자료구조와 유사하게 동작 (FILO, LIFO)
* 루프 구현시 유용, 하지만 무한 루프에 빠질 수 있음
*
* 콜 스택에 제한이 있고 자바스크립트 엔진마다 제한 수 다름, 크롬은 약 1만개
* 꼬리 재귀(Tail Recursion}) 제공 되지 않음
* 성능이 좋지 않음 **
* */

/*
* 재귀로 구현해야 편한 알고리즘
* Union-Find
* DFS
* Backtracking
* 불편함을 무시한다면 더 빠른 성능으로 작성 할 수 있음 (코테에서 추천하지 않음)
* */

// 피보나치 수열
// 앞 두항의 합이 뒤 항의 값이 되는 수열
function fibonacci(x) {
  if(x <= 2) return 1;

  return fibonacci(x - 1) + fibonacci(x - 2);
}

//// 합병 정렬
// 결합
function merge(a, b) {
  if(a.length === 0) return b;
  else if(b.length === 0) return a;
  else if(a[0] < b[0]) return [a[0], ...merge(a.slice(1), b)];
  else return [b[0], ...merge(a, b.slice(1))];
}

// 분해
function mergeSort(arr) {
  if(arr.length < 2) return arr;
  else {
    const mid = Math.floor(arr.length / 2);
    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
  }
}