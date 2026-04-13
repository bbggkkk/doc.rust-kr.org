// JS에서는 참조 스코프 제약이 없습니다.
// 같은 객체를 여러 변수가 동시에 참조하고 수정할 수 있습니다.

const s = { value: "hello" };

const r1 = s; // 같은 객체를 참조
const r2 = s; // 같은 객체를 참조
console.log(r1.value, r2.value);

// JS에서는 동시에 수정해도 아무 문제가 없습니다
s.value = "world";
console.log(r1.value); // "world" — r1도 바뀐 값을 봅니다
