// Rust의 add 메서드 시그니처
// fn add(self, s: &str) -> String

// JavaScript에서 + 연산자는 두 문자열을 이어붙입니다
// Rust와 달리 소유권 이동이 발생하지 않습니다
const s1 = "Hello";
const s2 = "World";
const s3 = s1 + s2; // 새 문자열 생성, s1과 s2 모두 유효

// Rust에서는 s1의 소유권이 이동되어 s1을 더 이상 사용할 수 없습니다
