// Rust의 fn main()은 프로그램의 진입점입니다.
// TypeScript/Node.js에서는 별도의 main 함수 없이 파일이 곧 진입점이지만,
// 여기서는 구조를 맞추기 위해 함수로 감쌉니다.

function main() {
  // println!은 Rust의 매크로로, 표준 출력에 줄바꿈과 함께 출력합니다.
  console.log("Hello, world!");
}

main();
