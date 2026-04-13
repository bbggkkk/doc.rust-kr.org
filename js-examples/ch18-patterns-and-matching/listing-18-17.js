// Rust의 _ 매개변수 → JS에서도 사용하지 않는 매개변수를 표현할 수 있습니다

function foo(_unusedParam, y) {
  console.log(`This code only uses the y parameter: ${y}`);
}

foo(3, 4);
