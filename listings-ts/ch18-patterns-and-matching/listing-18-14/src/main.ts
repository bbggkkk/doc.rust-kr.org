interface Point {
  x: number;
  y: number;
}

const p: Point = { x: 0, y: 7 };

// match로 구조체 해체 + 리터럴 매칭 → if-else로 분기
if (p.y === 0) {
  console.log(`On the x axis at ${p.x}`);
} else if (p.x === 0) {
  console.log(`On the y axis at ${p.y}`);
} else {
  console.log(`On neither axis: (${p.x}, ${p.y})`);
}
