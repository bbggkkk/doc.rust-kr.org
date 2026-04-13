// Rust: fn some_function<T: Display + Clone, U: Clone + Debug>(t: &T, u: &U) -> i32
// 복잡한 트레이트 바운드를 where 조항으로 정리하는 것은
// JS에서는 해당하지 않습니다 — 타입 제약이 없기 때문입니다.
function someFunction(t, u) {
    return 0;
}
