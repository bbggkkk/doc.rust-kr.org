// 복잡한 중첩 구조 분해
interface Point {
  x: number;
  y: number;
}

const [[feet, inches], { x, y }]: [[number, number], Point] = [[3, 10], { x: 3, y: -10 }];
