// Rust에서는 컴파일 에러! 불변 참조자가 있는 동안 가변 참조자를 만들 수 없습니다
// JS에서는 아무 문제 없이 동작합니다

let s = "hello"; // Rust: let mut s = String::from("hello")

const r1 = s;    // Rust: let r1 = &s; (불변 참조) - 문제없음
const r2 = s;    // Rust: let r2 = &s; (불변 참조) - 문제없음
// Rust: let r3 = &mut s; → 컴파일 에러!
// 불변 참조자(r1, r2)가 사용되는 동안 가변 참조자를 만들 수 없습니다
// 읽기 중에 값이 변경되는 것을 방지하기 위함입니다

console.log(r1, r2); // JS에서는 자유롭게 접근 가능
