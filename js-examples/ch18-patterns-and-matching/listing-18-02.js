// Rust의 while let → JS의 while + 조건 분해

const stack = [1, 2, 3];

let top;
while ((top = stack.pop()) !== undefined) {
  console.log(top);
}
// 출력: 3, 2, 1
