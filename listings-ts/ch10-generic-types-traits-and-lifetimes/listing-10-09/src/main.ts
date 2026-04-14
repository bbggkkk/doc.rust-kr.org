// impl<T> Point<T> -> 제네릭 클래스의 메서드
class Point<T> {
    x: T;
    y: T;

    constructor(x: T, y: T) {
        this.x = x;
        this.y = y;
    }

    // fn x(&self) -> &T -> getter 메서드
    getX(): T {
        return this.x;
    }
}

function main() {
    const p = new Point(5, 10);
    console.log(`p.x = ${p.getX()}`);
}

main();
