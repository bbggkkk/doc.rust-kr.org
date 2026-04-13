// 순환 참조 만들기 — JS GC가 자동 처리
// Rust에서는 Rc<T>의 참조 카운팅으로 인해 순환 참조가 메모리 누수를 발생시킵니다.
// JS의 mark-and-sweep GC는 순환 참조를 자동으로 감지하고 처리합니다.

const a = { value: 5, next: null };
const b = { value: 10, next: a };

// 순환 참조 생성
a.next = b;

console.log(a.value); // 5
console.log(a.next.value); // 10
console.log(a.next.next.value); // 5 — 순환!

// JS에서는 이것이 메모리 누수를 발생시키지 않습니다.
// 루트에서 도달할 수 없게 되면 GC가 자동으로 수거합니다.
