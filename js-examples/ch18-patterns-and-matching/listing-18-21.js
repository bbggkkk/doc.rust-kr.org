// Rust에서는 _s가 값을 바인딩하여 소유권을 가져가므로 원본 사용이 불가합니다.
// JS에서는 소유권 개념이 없으므로 자유롭게 재사용할 수 있습니다.

const s = "Hello!";

const _s = s; // JS에서는 값이 복사(원시값) 또는 참조 공유됨
console.log("found a string");

console.log(s); // JS에서는 문제없음 — Rust에서는 컴파일 에러!
