// Rust에서는 컴파일 에러! 동시에 두 개의 가변 참조자를 만들 수 없습니다
// JS에서는 아무 문제 없이 동작합니다

let s = "hello"; // Rust: let mut s = String::from("hello")

// JS에서는 같은 객체를 여러 변수가 참조해도 문제없습니다
const r1 = { value: s }; // Rust: let r1 = &mut s;
const r2 = { value: s }; // Rust: let r2 = &mut s; → 컴파일 에러!

// Rust는 데이터 경합(data race)을 방지하기 위해
// 같은 데이터에 대한 가변 참조자를 동시에 하나만 허용합니다
// JS에서는 이런 제한이 없어서 경쟁 상태 버그가 발생할 수 있습니다
console.log(r1.value, r2.value);
