/*
* 배열
* > 고정된 크기를 가지지만 자바스크립트는 동적으로 크기가 증감
* > 배열을 재정리 하려면 O(n) 선형시간이 걸리므로 삭제가 빈번한 로직일 경우 배열 사용은 권장 X
* > shift: 배열 맨 앞 값 제거 후 리턴
* > unShift: 배열 맨 앞에 값 추가
* > JS 에서 배열은 객체타입, HashMap 에 가까움
* */
const array = [5, 9, 10, 3, 8, 3, 2];
// 그냥 정렬 시 아스키 문자 순서 기준으로 정렬됨
array.sort();
console.log('Array Sort(아스키 기준)', array);

array.sort((a, b) => a - b); // 오름차순 정렬
console.log('Array Sort(오름차순)', array);
array.sort((a, b) => b - a); // 내림차순 정렬
console.log('Array Sort(내림차순)', array);