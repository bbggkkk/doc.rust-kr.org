// macro_rules! — 컴파일 타임 코드 생성 (TS에는 동등한 기능 없음)
// Rust의 매크로는 패턴 매칭으로 코드를 생성하는 메타프로그래밍 도구
// TS에서 가장 가까운 것은 제네릭 헬퍼 함수

// Rust:
// macro_rules! vec {
//   ( $( $x:expr ),* ) => { ... };
// }

// TS: 가변 인자 함수로 유사하게 표현
function vec<T>(...items: T[]): T[] {
  const tempVec: T[] = [];
  for (const item of items) {
    tempVec.push(item);
  }
  return tempVec;
}
