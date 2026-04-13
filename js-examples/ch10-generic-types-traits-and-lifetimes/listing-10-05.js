// Rust에서 이 코드는 컴파일되지 않습니다 — 제네릭 T에 비교 연산이 구현되어 있지 않기 때문입니다.
// JS에서는 동적 타이핑이므로 > 연산자가 대부분의 타입에 작동합니다.
function largest(list) {
    let largest = list[0];
    for (const item of list) {
        if (item > largest) {
            largest = item;
        }
    }
    return largest;
}

const numberList = [34, 50, 25, 100, 65];
console.log(`The largest number is ${largest(numberList)}`);

const charList = ["y", "m", "a", "q"];
console.log(`The largest char is ${largest(charList)}`);
