// Rust: let s1 = String::from("hello"); let s2 = s1;
// Rust에서 s1은 s2로 이동(move)되어 더 이상 사용할 수 없습니다.
// JS에서는 문자열이 원시 타입이므로 값이 복사됩니다.
const s1 = "hello";
const s2 = s1;
console.log(s1); // JS에서는 정상 동작: "hello"
console.log(s2); // "hello"
// 객체의 경우 참조가 복사되지만, 원본도 계속 사용 가능합니다.
