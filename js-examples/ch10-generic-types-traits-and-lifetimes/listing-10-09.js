// Rust의 impl<T> Point<T> → JS에서는 클래스에 메서드를 정의합니다
// JS는 동적 타입이므로 impl<T>처럼 제네릭을 선언할 필요가 없습니다
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getX() {
        return this.x;
    }
}

const p = new Point(5, 10);
console.log(`p.x = ${p.getX()}`);
