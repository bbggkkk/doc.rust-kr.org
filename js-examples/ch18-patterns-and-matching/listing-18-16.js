// Rust의 중첩된 열거형 패턴 매칭 → JS의 객체 기반 분기

const msg = {
  type: "ChangeColor",
  color: { type: "Hsv", h: 0, s: 160, v: 255 },
};

if (msg.type === "ChangeColor") {
  const { color } = msg;
  if (color.type === "Rgb") {
    console.log(
      `Change color to red ${color.r}, green ${color.g}, and blue ${color.b}`
    );
  } else if (color.type === "Hsv") {
    console.log(
      `Change color to hue ${color.h}, saturation ${color.s}, value ${color.v}`
    );
  }
}
