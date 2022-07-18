// 로그 시간 = 이진 탐색
// times => 선형 로그 시간으로 충분히 가능

// 특정 값을 찾는 것이 아닌
// 최소 몇분에 모든 심사가 끝나는가
// ㄴ 결정 문제 = 이진 탐색 = 파라메트릭 서치 (Parametric Search)

// 입국심사, 심사관 당 심사 시간이 상이

function solution(n, times) {
  const sortedTimes = times.sort((a, b) => a - b);  // O(n log n)
  let left = 1;
  let right = sortedTimes[sortedTimes.length - 1] * n;
  
  while(left <= right) {
      const mid = Math.floor((left + right) / 2);
      
      // sum([시간 / 심사시간])
      const sum = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);
      
      if(sum < n) left = mid + 1;
      else right = mid - 1;
  }
  
  return left;
}