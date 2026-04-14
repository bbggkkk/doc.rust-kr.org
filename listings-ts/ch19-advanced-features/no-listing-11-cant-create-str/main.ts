// Rust: str은 동적 크기 타입(DST) — 컴파일 타임에 크기를 알 수 없음
// TS/JS의 string은 항상 힙에 할당되므로 이런 제한이 없음

const s1: string = "Hello there!";
const s2: string = "How's it going?";
// TS에서는 문자열 크기에 관계없이 자유롭게 변수에 할당 가능
