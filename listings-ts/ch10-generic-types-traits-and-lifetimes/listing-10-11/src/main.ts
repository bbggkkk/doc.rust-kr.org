// 구조체 정의와 다른 제네릭 타입을 사용하는 메서드
class Point<X1, Y1> {
    x: X1;
    y: Y1;

    constructor(x: X1, y: Y1) {
        this.x = x;
        this.y = y;
    }

    // fn mixup<X2, Y2>(self, other: Point<X2, Y2>) -> Point<X1, Y2>
    mixup<X2, Y2>(other: Point<X2, Y2>): Point<X1, Y2> {
        return new Point(this.x, other.y);
    }
}

function main() {
    const p1 = new Point(5, 10.4);
    const p2 = new Point("Hello", "c");

    const p3 = p1.mixup(p2);

    console.log(`p3.x = ${p3.x}, p3.y = ${p3.y}`);
}

main();
