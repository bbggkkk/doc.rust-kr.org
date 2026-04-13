// drop 메서드 수동 호출 시도 — Rust에서는 금지
// Rust에서는 c.drop()을 직접 호출할 수 없습니다 (이중 해제 방지).
// JS에서는 GC가 메모리를 관리하므로 수동 해제 개념이 없습니다.

// Rust에서 허용되지 않는 코드:
// let c = CustomSmartPointer { data: "some data" };
// c.drop(); // 컴파일 에러!

// JS에서는 객체를 null로 설정하여 GC 대상으로 만들 수 있습니다:
let obj = { data: "some data" };
obj = null; // GC가 나중에 수거 (시점 보장 없음)
