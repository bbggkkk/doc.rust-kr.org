// Point<T>에서 T는 하나 -> x, y가 같은 타입이어야 함
interface Point<T> {
    x: T;
    y: T;
}

function main() {
    // TS에서도 타입 불일치 에러 발생
    // const wontWork: Point<number> = { x: 5, y: 4.0 };
    // TS에서는 number가 정수/실수 구분이 없어 이 경우 에러 아님
    // Rust에서는 i32와 f64가 다른 타입이므로 컴파일 에러
    const wontWork = { x: 5, y: 4.0 }; // Rust에서는 에러!
}

main();
