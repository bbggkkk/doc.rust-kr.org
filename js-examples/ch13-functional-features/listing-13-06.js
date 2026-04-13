// JS에는 move 개념이 없음 — 클로저는 항상 참조로 캡처
// JS의 비동기 실행은 스레드 대신 이벤트 루프 기반
const list = [1, 2, 3];
console.log("Before defining closure:", list);

// setTimeout은 Rust의 thread::spawn과 유사한 비동기 실행
setTimeout(() => console.log("From async:", list), 0);
