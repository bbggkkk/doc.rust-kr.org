// JS는 동적 타입이므로 제네릭 없이도 어떤 타입이든 담을 수 있습니다
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const integer = new Point(5, 10);
const float = new Point(1.0, 4.0);
