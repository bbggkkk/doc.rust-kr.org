// 유사 유닛 구조체 — JavaScript에는 직접 대응하는 개념이 없습니다

// JavaScript에서 가장 가까운 표현은 빈 클래스입니다
class AlwaysEqual {}

const subject = new AlwaysEqual();

// JavaScript에서는 빈 객체 {}로도 표현할 수 있지만,
// Rust의 유사 유닛 구조체처럼 타입 수준에서 구별되지는 않습니다
