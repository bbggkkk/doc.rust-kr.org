// Rust의 fn 포인터 타입 → TS의 함수 타입

function addOne(x: number): number {
  return x + 1;
}

// Rust: fn do_twice(f: fn(i32) -> i32, arg: i32) -> i32
// TS: 함수 타입을 매개변수로 받음
function doTwice(f: (x: number) => number, arg: number): number {
  return f(arg) + f(arg);
}

const answer = doTwice(addOne, 5);

console.log(`The answer is: ${answer}`);
