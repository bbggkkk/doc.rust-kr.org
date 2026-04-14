// _ 로 매개변수 무시 → 사용하지 않는 매개변수
function foo(_unused: number, y: number): void {
  console.log(`This code only uses the y parameter: ${y}`);
}

foo(3, 4);
