// where 조항 -> TS에서는 제네릭 제약을 선언부에 작성
// Rust: fn some_function<T, U>(t: &T, u: &U) -> i32
//       where T: Display + Clone, U: Clone + Debug
function someFunction<
    T extends Display & Clone,
    U extends Clone & Debug,
>(t: T, u: U): number {
    // ...
    return 0;
}
