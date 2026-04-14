// JS에서 순환 참조는 매우 쉽게 만들 수 있습니다.
// GC가 있어 메모리 누수는 보통 발생하지 않지만,
// 순환 참조 자체는 방지되지 않습니다.

type ListNode = { kind: "Cons"; value: number; next: ListNode | null };

const a: ListNode = { kind: "Cons", value: 5, next: null };
const b: ListNode = { kind: "Cons", value: 10, next: a };

// 순환 참조 생성! a → b → a → b → ...
a.next = b;

console.log("a의 value:", a.value);
console.log("b의 value:", b.value);

// JS의 GC는 순환 참조도 감지하여 수집할 수 있음 (mark-and-sweep)
// Rust의 Rc는 참조 카운팅이므로 순환 참조 시 메모리 누수 발생!

// console.log(JSON.stringify(a)); // TypeError: circular structure
