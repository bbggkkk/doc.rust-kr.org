let s = "hello"; // Rust: let mut s = String::from("hello")

const r1 = s; // Rust: let r1 = &s; (불변 참조)
const r2 = s; // Rust: let r2 = &s; (불변 참조)
console.log(r1, "and", r2);
// Rust: r1과 r2는 여기 이후로 사용되지 않으므로 스코프가 종료됩니다
// (NLL: Non-Lexical Lifetime - 마지막 사용 지점에서 참조 스코프 종료)

// Rust: let r3 = &mut s; → 이제 문제없음! (r1, r2의 스코프가 끝났으므로)
s = "modified"; // 가변 참조로 수정 가능
console.log(s);
// JS에서는 이런 스코프 분석이 필요 없습니다
