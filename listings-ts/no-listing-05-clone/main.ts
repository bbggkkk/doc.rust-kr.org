// Rust: clone()으로 힙 데이터까지 깊은 복사
const s1 = "hello"; // Rust: String::from("hello")
const s2 = structuredClone(s1); // Rust: s1.clone() - 깊은 복사
// JS의 structuredClone() 또는 스프레드 연산자(...)가 Rust의 clone()에 해당합니다
// clone() 후에도 s1은 여전히 유효합니다 (이동이 아닌 복사이므로)

console.log(`s1 = ${s1}, s2 = ${s2}`);
