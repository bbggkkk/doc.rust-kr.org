// unsafe 블록: Rust 컴파일러의 안전성 검사를 우회 (JS/TS에는 해당 개념 없음)
// Rust의 unsafe 함수는 호출자가 안전 계약을 지키겠다고 약속하는 것
// TS에는 이런 구분이 없음 — 모든 함수가 "안전"하게 호출됨

function dangerous(): void {
  // 아무 일도 하지 않음
}

// Rust에서는 unsafe 블록 안에서만 호출 가능
dangerous();
