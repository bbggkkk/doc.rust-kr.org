// Rust에서는 Point<T>에서 T가 하나이므로 x와 y가 같은 타입이어야 합니다.
// 다른 타입을 넣으면 컴파일 에러가 발생합니다.
// JS에서는 이런 타입 제약이 없어서 자유롭게 섞을 수 있습니다.
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const wontWork = new Point(5, 4.0); // JS에서는 문제없이 동작합니다
