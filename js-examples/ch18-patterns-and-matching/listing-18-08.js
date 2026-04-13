// Rust에서는 let에 반박 가능한 패턴을 사용하면 컴파일 에러가 납니다.
// JS에서는 구조 분해 실패 시 undefined가 되거나 에러가 발생합니다.

const someOptionValue = null;

// JS에서 유사한 시도 — null을 구조 분해하면 TypeError 발생
// const { value: x } = someOptionValue; // TypeError!

// 올바른 방법: if로 먼저 검사
if (someOptionValue != null) {
  const x = someOptionValue;
  console.log(x);
}
