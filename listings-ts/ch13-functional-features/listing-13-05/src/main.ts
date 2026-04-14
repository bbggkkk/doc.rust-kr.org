const list = [1, 2, 3];
console.log("Before defining closure:", list);

// Rust: let mut borrows_mutably = || list.push(7);
// JS 클로저는 항상 참조로 캡처하므로 외부 변수를 자유롭게 변경 가능
// (Rust의 가변 빌림에 해당하지만, JS에는 빌림 규칙이 없음)
const borrowsMutably = () => list.push(7);

borrowsMutably();
console.log("After calling closure:", list);
