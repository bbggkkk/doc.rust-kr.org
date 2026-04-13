// Rust: 타입을 명시하고 파싱 실패 시 에러 처리
// JS: 동적 타입이므로 타입 명시 불필요, 파싱 결과가 NaN일 수 있음
const guess = parseInt("42", 10); // NaN 가능성 — Rust는 이를 컴파일 타임에 방지
// TypeScript라면: const guess: number = parseInt("42", 10);
