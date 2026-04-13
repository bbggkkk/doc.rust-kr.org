// 예제 19-4: 슬라이스 분할하기
// JS에서는 배열의 slice 메서드로 간단히 분할할 수 있습니다.
// 메모리 안전성 문제가 없으므로 unsafe가 필요 없습니다.

const values = [1, 2, 3, 4, 5, 6];

const a = values.slice(0, 3); // [1, 2, 3]
const b = values.slice(3);    // [4, 5, 6]

console.log(a); // [1, 2, 3]
console.log(b); // [4, 5, 6]
