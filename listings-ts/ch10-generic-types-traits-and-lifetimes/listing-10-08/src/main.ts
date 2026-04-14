// struct Point<T, U> -> 두 제네릭 타입으로 서로 다른 타입 허용
interface Point<T, U> {
    x: T;
    y: U;
}

function main() {
    const bothInteger: Point<number, number> = { x: 5, y: 10 };
    const bothFloat: Point<number, number> = { x: 1.0, y: 4.0 };
    const integerAndFloat: Point<number, number> = { x: 5, y: 4.0 };
}

main();
