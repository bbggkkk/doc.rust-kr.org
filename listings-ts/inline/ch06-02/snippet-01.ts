// Rust 열거형의 각 배리언트 크기 → 가장 큰 배리언트만큼 공간 필요
// TS에서는 유니온 타입 + 태그로 유사하게 표현
type Message =
  | { tag: "Quit" }
  | { tag: "Move"; x: number; y: number }
  | { tag: "Write"; value: string }
  | { tag: "ChangeColor"; r: number; g: number; b: number };
