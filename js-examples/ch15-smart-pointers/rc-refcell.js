// Rc<RefCell<T>> 조합: 가변 데이터의 복수 소유자
// JS에서는 여러 변수가 같은 가변 객체를 자연스럽게 공유합니다.

// Rust: Rc<RefCell<i32>>로 여러 리스트가 같은 값을 공유하며 변경
// JS: 같은 객체를 여러 변수가 참조

const value = { data: 5 };

const a = { value: value, next: null };
const b = { value: { data: 3 }, next: a };
const c = { value: { data: 4 }, next: a };

// 공유된 값 변경
value.data += 10;

console.log(`a = ${a.value.data}`); // 15
console.log(`b next = ${b.next.value.data}`); // 15
console.log(`c next = ${c.next.value.data}`); // 15
// 모든 참조에서 변경된 값이 보입니다.
