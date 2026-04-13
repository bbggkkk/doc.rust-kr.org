// Rust의 mixup<X2, Y2>는 메서드에 추가 제네릭 매개변수를 선언합니다
// JS에서는 동적 타입이므로 자연스럽게 어떤 타입이든 받을 수 있습니다
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    mixup(other) {
        return new Point(this.x, other.y);
    }
}

const p1 = new Point(5, 10.4);
const p2 = new Point("Hello", 'c');
const p3 = p1.mixup(p2);

console.log(`p3.x = ${p3.x}, p3.y = ${p3.y}`);
