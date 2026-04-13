// Rust: impl<T: Display> ToString for T { ... }
// 포괄 구현(blanket implementation) — Display를 구현하는 모든 타입에 ToString을 자동 구현합니다.
// JS에서는 모든 객체가 이미 toString() 메서드를 가지고 있습니다.
const s = (3).toString();
console.log(s); // "3"
