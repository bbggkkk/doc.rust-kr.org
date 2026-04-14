// 제네릭 함수: fn largest<T>(list: &[T]) -> &T
// TS에서는 비교 연산자가 대부분 타입에서 동작하지만,
// Rust에서는 PartialOrd 트레이트가 필요
function largest<T>(list: T[]): T {
    let result = list[0];

    for (const item of list) {
        if (item > result) { // Rust: PartialOrd 트레이트 필요
            result = item;
        }
    }

    return result;
}

function main() {
    const numberList = [34, 50, 25, 100, 65];
    const result = largest(numberList);
    console.log(`The largest number is ${result}`);

    const charList = ["y", "m", "a", "q"];
    const result2 = largest(charList);
    console.log(`The largest char is ${result2}`);
}

main();
