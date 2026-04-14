// 열거형 → 태그드 유니온 (discriminated union)
type Message =
  | { kind: "Quit" }
  | { kind: "Move"; x: number; y: number }
  | { kind: "Write"; text: string }
  | { kind: "ChangeColor"; r: number; g: number; b: number };

const msg: Message = { kind: "ChangeColor", r: 0, g: 160, b: 255 };

// match → switch on discriminant
switch (msg.kind) {
  case "Quit":
    console.log("The Quit variant has no data to destructure.");
    break;
  case "Move":
    console.log(`Move in the x direction ${msg.x} and in the y direction ${msg.y}`);
    break;
  case "Write":
    console.log(`Text message: ${msg.text}`);
    break;
  case "ChangeColor":
    console.log(`Change the color to red ${msg.r}, green ${msg.g}, and blue ${msg.b}`);
    break;
}
