// 트레이트 바운드가 많은 경우 (가독성이 떨어짐)
// fn some_function<T: Display + Clone, U: Clone + Debug>(t: &T, u: &U) -> i32
function someFunction<T extends Display & Clone, U extends Clone & Debug>(
    t: T, u: U
): number {
    // ...
}
