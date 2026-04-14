// --생략-- (버그가 있는 구현)
function canHold(self: Rectangle, other: Rectangle): boolean {
  // 버그: > 대신 < 사용
  return self.width < other.width && self.height > other.height;
}
