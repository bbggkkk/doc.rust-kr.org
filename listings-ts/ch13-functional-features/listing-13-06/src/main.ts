const list = [1, 2, 3];
console.log("Before defining closure:", list);

// move: 클로저가 변수의 소유권을 가져감
// JS에서는 소유권 개념이 없으므로, 구조 분해로 복사하는 것이 가장 가까운 표현
const listCopy = [...list]; // move 시뮬레이션: 값을 복사하여 전달

// Rust: thread::spawn(move || println!("From thread: {:?}", list))
// JS에서 Worker에 데이터를 전달할 때 structuredClone 또는 복사를 사용
setTimeout(() => {
  console.log("From thread:", listCopy);
}, 0);
