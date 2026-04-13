// JS에서 객체는 항상 가변(mutable)입니다.
// Rust의 &mut 같은 제약이 없습니다.

function change(obj) {
  obj.value += ", world";
}

const s = { value: "hello" };
change(s);

console.log(s.value); // "hello, world"
