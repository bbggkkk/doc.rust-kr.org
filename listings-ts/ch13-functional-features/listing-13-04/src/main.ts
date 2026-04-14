const list = [1, 2, 3];
console.log("Before defining closure:", list);

// Rust: let only_borrows = || println!("From closure: {:?}", list);
// JS 클로저는 외부 변수를 자동으로 캡처 (참조로 캡처, Rust의 불변 빌림과 유사)
const onlyBorrows = () => console.log("From closure:", list);

console.log("Before calling closure:", list);
onlyBorrows();
console.log("After calling closure:", list);
