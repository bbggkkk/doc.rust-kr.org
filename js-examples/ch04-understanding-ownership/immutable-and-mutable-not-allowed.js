// Rust에서는 불변 참조자가 있는 동안 가변 참조자를 만들 수 없습니다.
// JS에서는 이런 제한이 없습니다.
const s = { value: "hello" };
const r1 = s; // "불변 참조"
const r2 = s; // "불변 참조"
console.log(r1.value, r2.value);
// JS에서는 언제든 수정 가능:
s.value = "world"; // Rust에서는 여기서 에러
console.log(r1.value); // "world"
// Rust는 불변/가변 참조 동시 사용을 컴파일 타임에 방지합니다.
