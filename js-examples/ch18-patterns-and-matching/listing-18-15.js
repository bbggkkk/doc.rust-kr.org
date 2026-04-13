// Rust의 열거형 해체 → JS의 태그된 유니온 패턴 + switch

// JS에서 열거형을 흉내내기 위한 태그된 객체
const Message = {
  Quit: () => ({ type: "Quit" }),
  Move: (x, y) => ({ type: "Move", x, y }),
  Write: (text) => ({ type: "Write", text }),
  ChangeColor: (r, g, b) => ({ type: "ChangeColor", r, g, b }),
};

const msg = Message.ChangeColor(0, 160, 255);

switch (msg.type) {
  case "Quit":
    console.log("The Quit variant has no data to destructure.");
    break;
  case "Move": {
    const { x, y } = msg;
    console.log(`Move in the x direction ${x} and in the y direction ${y}`);
    break;
  }
  case "Write":
    console.log(`Text message: ${msg.text}`);
    break;
  case "ChangeColor": {
    const { r, g, b } = msg;
    console.log(`Change the color to red ${r}, green ${g}, and blue ${b}`);
    break;
  }
}
