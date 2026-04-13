// Rust에서는 스레드에 참조를 넘긴 뒤 원본을 drop하면 컴파일 에러가 납니다.
// JS에서는 가비지 컬렉터가 참조를 관리하므로, 원본 변수를 null로 설정해도
// 이미 캡처된 클로저에서는 원래 배열에 접근할 수 있습니다.

let v = [1, 2, 3];

setTimeout(() => {
  console.log(`Here's an array: ${JSON.stringify(v)}`);
  // 주의: v가 null이어도 클로저가 캡처한 건 원래 배열 참조입니다.
  // 하지만 v를 재할당하면 클로저는 null을 봅니다.
}, 0);

v = null; // Rust에서는 drop(v)에 해당 — JS에서는 문제가 발생할 수 있습니다
