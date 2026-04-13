// Rust: 클로저를 직접 반환하려 하면 Sized 에러 발생
// JavaScript에서는 함수를 자유롭게 반환할 수 있습니다

function returnsClosure() {
  return (x) => x + 1;
}

const addOne = returnsClosure();
console.log(addOne(5)); // 6
