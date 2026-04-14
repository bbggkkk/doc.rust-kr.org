// struct Point<T> -> interface/class with generic
interface Point<T> {
    x: T;
    y: T;
}

function main() {
    const integer: Point<number> = { x: 5, y: 10 };
    const float: Point<number> = { x: 1.0, y: 4.0 };
}

main();
