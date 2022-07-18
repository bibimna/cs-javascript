// 1. 소수 구하기 (소수는 1 또는 자기 자신만을 약수로 가지는 수)
// 1.1 2 부터 n-1 까지 루프를 돌며 나누기 (시간복잡도 O(n)) >> 가장 느림
function is_prime(num) {
  for(let i = 2; i < num; i += 1) {
    if(num % i === 0) return false;
  }

  return true;
}

// 1.2 그 어떤 소수도 N의 제곱근보다 큰 수로 나눠지지 않는 다는 점 이용 O(sqrt(n))
function is_prime2(num) {
  for(let i = 2; i * i < num; i += 1) {
    if(num % i === 0) return false;
  }

  return true;
}

// 1.3 에라토스테네스의 체 O(n log log n), 1 부터 N 까지 모든 소수를 구하는 경우 가장 효율적
function is_prime3(num) {
  // false array(100 + 1) 
  const prime = [false, false, ...Array(num - 1).fill(true)];

  for(let i = 2; i * i <= num; i += 1) {
    if(prime[i]) {
      for(let j = i * 2; j <= num; j += i) {
        prime[j] = false
      }
    }
  }
}
