const numbers: [number, number, number, number, number] = [2, 4, 8, 16, 32];

// (.., second, ..) → 모호한 사용 — Rust에서는 컴파일 에러
// JS/TS에서는 이런 모호한 구조 분해가 불가능
// const [???, second, ???] = numbers; // 어떤 위치인지 알 수 없음
