// Rust: Pilot::fly(&person) — 트레이트를 명시하여 호출
// TS에서는 메서드 이름을 다르게 하거나 타입 단언으로 구분

const person = new Human();
// Rust: Pilot::fly(&person)
person.flyAsPilot();  // "This is your captain speaking."
// Rust: Wizard::fly(&person)
person.flyAsWizard(); // "Up!"
// 기본 메서드
person.fly();         // "*waving arms furiously*"
