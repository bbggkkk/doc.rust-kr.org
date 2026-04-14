// Rust의 재귀적 타입 - 컴파일 타임에 크기를 알 수 없어 Box가 필요
// JS/TS에서는 모든 객체가 참조(힙)이므로 이런 제한이 없음
type List = { tag: "Cons"; value: number; next: List } | { tag: "Nil" };
