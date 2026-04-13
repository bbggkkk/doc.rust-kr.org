// Rust의 match에서 변수 섀도잉 → JS에서는 switch + 블록 스코프

const x = { type: "some", value: 5 };
const y = 10;

switch (true) {
  case x.type === "some" && x.value === 50:
    console.log(`Got 50`);
    break;
  case x.type === "some": {
    // 이 블록의 y는 새로운 변수 (Rust의 매치 갈래 내 y와 유사)
    const y = x.value;
    console.log(`Matched, y = ${y}`);
    break;
  }
  default:
    console.log(`Default case, x = ${JSON.stringify(x)}`);
}

console.log(`at the end: x = ${JSON.stringify(x)}, y = ${y}`);
