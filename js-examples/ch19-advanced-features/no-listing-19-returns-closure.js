// 클로저 반환하기
// JS에서는 함수가 일급 객체이므로 클로저(화살표 함수)를 자유롭게 반환할 수 있습니다.
// Rust처럼 Box나 dyn Trait가 필요 없습니다.

function returnsClosure() {
  return (x) => x + 1;
}

const addOne = returnsClosure();
console.log(addOne(5)); // 6

// 클로저가 외부 변수를 캡처하는 경우도 자연스럽게 동작합니다.
function makeAdder(n) {
  return (x) => x + n;
}

const addFive = makeAdder(5);
console.log(addFive(10)); // 15
