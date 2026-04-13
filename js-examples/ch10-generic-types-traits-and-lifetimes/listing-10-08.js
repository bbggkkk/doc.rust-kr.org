// JS의 동적 타입 덕분에 x, y가 서로 다른 타입이어도 문제없습니다
// Rust에서는 Point<T, U>처럼 두 개의 제네릭 매개변수가 필요합니다
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const bothInteger = new Point(5, 10);
const bothFloat = new Point(1.0, 4.0);
const integerAndFloat = new Point(5, 4.0);
