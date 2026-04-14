let s = "hello"; // Rust: let mut s = String::from("hello")

{
    const r1 = s; // Rust: let r1 = &mut s;
    // r1으로 작업...
} // Rust: r1이 스코프를 벗어나므로, 새로운 가변 참조자를 만들 수 있습니다

const r2 = s; // Rust: let r2 = &mut s; → 이제 문제없음!
// Rust: 가변 참조자의 스코프가 겹치지 않으면 각각 만들 수 있습니다
// JS에서는 이런 스코프 제한이 없습니다
