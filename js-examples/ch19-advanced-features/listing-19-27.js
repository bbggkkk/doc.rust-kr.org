// 예제 19-27: 함수 포인터 (fn 타입)
// JS에서 함수는 일급 객체이므로 자연스럽게 인자로 전달할 수 있습니다.

function addOne(x) {
  return x + 1;
}

function doTwice(f, arg) {
  return f(arg) + f(arg);
}

const answer = doTwice(addOne, 5);
console.log(`The answer is: ${answer}`); // The answer is: 12
