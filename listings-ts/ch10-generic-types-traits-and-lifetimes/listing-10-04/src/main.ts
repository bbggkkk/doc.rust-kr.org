// 이름과 타입 시그니처만 다른 두 함수
function largestI32(list: number[]): number {
    let largest = list[0];

    for (const item of list) {
        if (item > largest) {
            largest = item;
        }
    }

    return largest;
}

function largestChar(list: string[]): string {
    let largest = list[0];

    for (const item of list) {
        if (item > largest) {
            largest = item;
        }
    }

    return largest;
}

function main() {
    const numberList = [34, 50, 25, 100, 65];
    const result = largestI32(numberList);
    console.log(`The largest number is ${result}`);

    const charList = ["y", "m", "a", "q"];
    const result2 = largestChar(charList);
    console.log(`The largest char is ${result2}`);
}

main();
