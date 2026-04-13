// Rust의 구조체 패턴 매칭 + 리터럴 → JS의 if/else 조건 분기

const p = { x: 0, y: 7 };

if (p.y === 0) {
  console.log(`On the x axis at ${p.x}`);
} else if (p.x === 0) {
  console.log(`On the y axis at ${p.y}`);
} else {
  console.log(`On neither axis: (${p.x}, ${p.y})`);
}
