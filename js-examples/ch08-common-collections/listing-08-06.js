// 예제 8-6: 참조를 가진 상태에서 벡터 수정하기
// JavaScript에서는 이것이 허용되지만 Rust에서는 대여 규칙 위반입니다

const v = [1, 2, 3, 4, 5];

const first = v[0]; // JavaScript에서는 값이 복사됩니다 (원시 타입)

v.push(6); // JavaScript에서는 문제없이 동작합니다

console.log(first); // 1 — JavaScript에서는 정상 동작

// Rust에서는 불변 참조자(&v[0])를 보유한 상태에서
// 가변 참조(v.push)를 시도하면 컴파일 에러가 발생합니다.
// 이는 벡터의 메모리 재할당으로 인한 댕글링 참조를 방지합니다.
