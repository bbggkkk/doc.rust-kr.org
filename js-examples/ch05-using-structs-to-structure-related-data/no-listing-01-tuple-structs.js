// Rust의 튜플 구조체 → JS에서는 class로 타입 구분을 흉내낼 수 있음
class Color {
  constructor(r, g, b) {
    this[0] = r; this[1] = g; this[2] = b;
  }
}

class Point {
  constructor(x, y, z) {
    this[0] = x; this[1] = y; this[2] = z;
  }
}

const black = new Color(0, 0, 0);
const origin = new Point(0, 0, 0);
// black과 origin은 서로 다른 타입 (instanceof로 구분 가능)
