// Display(toString)를 구현하지 않으면 OutlinePrint를 구현할 수 없음
// TS에서는 interface extends로 강제됨

class Point {
  constructor(public x: number, public y: number) {}
  // toString()을 구현하지 않으면
  // OutlinePrint 인터페이스를 만족시킬 수 없음 → 컴파일 에러
}

// Rust에서도 Display를 구현하지 않은 Point에 OutlinePrint를 구현하면 에러 발생
