type Message =
  | { kind: "Quit" }
  | { kind: "Move"; x: number; y: number }
  | { kind: "Write"; value: string }
  | { kind: "ChangeColor"; r: number; g: number; b: number };

// impl Message { fn call(&self) } → 함수로 표현
function callMessage(self: Message) {
  // 메서드 본문이 여기 정의될 것입니다
}

const m: Message = { kind: "Write", value: "hello" };
callMessage(m);
