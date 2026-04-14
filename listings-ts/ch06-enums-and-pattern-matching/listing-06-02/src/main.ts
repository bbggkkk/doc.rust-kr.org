// 다양한 데이터를 가진 열거형 → 구별된 유니온
type Message =
  | { kind: "Quit" }
  | { kind: "Move"; x: number; y: number }
  | { kind: "Write"; value: string }
  | { kind: "ChangeColor"; r: number; g: number; b: number };
