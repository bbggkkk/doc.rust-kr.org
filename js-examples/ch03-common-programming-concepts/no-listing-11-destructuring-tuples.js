// Rust 튜플 → JS 배열의 구조 분해 할당 (destructuring)
const tup = [500, 6.4, 1]; // JS에는 튜플이 없으므로 배열 사용
const [x, y, z] = tup;     // Rust: let (x, y, z) = tup;
console.log(`The value of y is: ${y}`);

// 차이점: Rust 튜플은 각 요소가 다른 타입 가능 + 고정 길이
// JS 배열은 아무 타입이나 섞어 넣을 수 있지만 타입 안전성 없음
