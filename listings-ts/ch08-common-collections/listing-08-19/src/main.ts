// [does_not_compile] Rust에서는 문자열 인덱싱이 불가능
// TypeScript에서는 인덱싱이 가능하지만, UTF-16 코드 유닛 단위
const s1 = "hello";
const h = s1[0]; // "h" (TypeScript에서는 가능)
// Rust에서는 String이 UTF-8 바이트 배열이므로 인덱싱을 지원하지 않음
// 글자마다 바이트 수가 다를 수 있기 때문
