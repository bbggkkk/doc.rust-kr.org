// Rust의 튜플에서 ..로 중간 값 무시 → JS의 배열 구조 분해

const numbers = [2, 4, 8, 16, 32];
const [first, , , , last] = numbers;
console.log(`first: ${first}, last: ${last}`);
// 또는 ...rest를 사용:
// const [first2, ...rest] = numbers;
// const last2 = rest[rest.length - 1];
