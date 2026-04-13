// JS 클로저는 항상 참조로 캡처 (Rust의 불변/가변 빌림 구분 없음)
const list = [1, 2, 3];
console.log("Before defining closure:", list);

const onlyBorrows = () => console.log("From closure:", list);

console.log("Before calling closure:", list);
onlyBorrows();
console.log("After calling closure:", list);
