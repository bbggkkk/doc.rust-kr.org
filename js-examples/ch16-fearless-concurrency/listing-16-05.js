// Rust의 move 클로저 — JS에서는 클로저가 자동으로 외부 변수를 캡처합니다.
// 소유권 이동 개념은 없지만, 참조를 통해 접근합니다.

const v = [1, 2, 3];

setTimeout(() => {
  console.log(`Here's an array: ${JSON.stringify(v)}`);
}, 0);

// JS에서는 v를 여전히 사용할 수 있습니다 (소유권 이동이 없으므로)
