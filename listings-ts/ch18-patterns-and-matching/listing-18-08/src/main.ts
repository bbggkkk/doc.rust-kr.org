// let에서 반박 가능한 패턴 사용 — Rust에서는 컴파일 에러
// TS에서도 null일 수 있는 값을 직접 분해하면 런타임 에러 가능
const someOptionValue: number | null = null;
const x = someOptionValue; // null일 수도 있어 안전하지 않음
