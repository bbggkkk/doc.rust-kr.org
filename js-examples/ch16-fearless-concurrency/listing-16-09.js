// Rust에서는 send()가 값의 소유권을 가져가므로, 보낸 뒤 사용하면 컴파일 에러가 납니다.
// JS에서는 소유권 개념이 없으므로 값을 보낸 뒤에도 자유롭게 사용할 수 있습니다.

const val = "hi";

// "채널"로 값을 보내는 것을 흉내냄
const sent = val;
console.log(`val is ${val}`); // JS에서는 문제없음 — Rust에서는 컴파일 에러!
