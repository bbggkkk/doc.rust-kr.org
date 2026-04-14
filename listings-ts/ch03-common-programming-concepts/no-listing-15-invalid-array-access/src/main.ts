import * as readline from "readline";

function main() {
    const a: number[] = [1, 2, 3, 4, 5];

    console.log("Please enter an array index.");

    // TS/JS에서는 범위 밖 인덱스 접근 시 undefined를 반환합니다 (패닉 없음)
    // Rust에서는 범위 밖 접근 시 패닉(런타임 에러)이 발생합니다
    const index = parseInt(prompt("") ?? "0");

    const element = a[index]; // undefined일 수 있음 (Rust는 여기서 패닉)

    console.log(`The value of the element at index ${index} is: ${element}`);
}

main();
