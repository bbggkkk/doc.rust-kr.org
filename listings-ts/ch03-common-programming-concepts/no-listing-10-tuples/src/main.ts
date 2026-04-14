function main() {
    // Rust 튜플 → TS 배열 (각 요소 타입이 다를 수 있음)
    const tup: [number, number, number] = [500, 6.4, 1];
    // Rust에서는 (i32, f64, u8)로 각각 다른 정수/실수 타입이지만
    // TS에서는 모두 number입니다
}

main();
