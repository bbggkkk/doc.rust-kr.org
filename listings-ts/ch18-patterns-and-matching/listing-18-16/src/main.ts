// 중첩된 열거형 → 중첩된 태그드 유니온
type Color =
  | { kind: "Rgb"; r: number; g: number; b: number }
  | { kind: "Hsv"; h: number; s: number; v: number };

type Message =
  | { kind: "Quit" }
  | { kind: "Move"; x: number; y: number }
  | { kind: "Write"; text: string }
  | { kind: "ChangeColor"; color: Color };

const msg: Message = { kind: "ChangeColor", color: { kind: "Hsv", h: 0, s: 160, v: 255 } };

// 중첩된 매칭 → 중첩된 조건
if (msg.kind === "ChangeColor") {
  const { color } = msg;
  if (color.kind === "Rgb") {
    console.log(`Change color to red ${color.r}, green ${color.g}, and blue ${color.b}`);
  } else if (color.kind === "Hsv") {
    console.log(`Change color to hue ${color.h}, saturation ${color.s}, value ${color.v}`);
  }
}
