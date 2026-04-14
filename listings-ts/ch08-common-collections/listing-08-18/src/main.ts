const s1 = "Hello, ";
const s2 = "world!";
const s3 = s1 + s2;
// TypeScript에서는 + 연산 후에도 s1, s2 모두 사용 가능
// Rust에서는 s1의 소유권이 이동되어 더 이상 사용할 수 없음
