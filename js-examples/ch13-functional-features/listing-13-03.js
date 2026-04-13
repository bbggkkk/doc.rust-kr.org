// 클로저 타입 추론: 한 번 추론된 타입은 고정됨
// Rust에서는 클로저의 타입이 첫 호출에서 추론되어 고정됩니다.
// JS에서는 타입 제약이 없어 아무 타입이나 전달할 수 있습니다.

const exampleClosure = (x) => x;

const s = exampleClosure("hello");
const n = exampleClosure(5); // JS에서는 문제 없음!

console.log(s); // "hello"
console.log(n); // 5

// Rust에서는 첫 호출에서 String으로 추론되면
// 두 번째 호출에서 정수를 넘기면 컴파일 에러가 발생합니다.
// JS에서는 이런 타입 제약이 없어 자유롭지만,
// 타입 안전성은 보장되지 않습니다.
