// [does_not_compile] Rust에서 세미콜론을 붙이면 구문이 되어 값을 반환하지 않습니다
function main() {
    const x = plus_one(5);

    console.log(`The value of x is: ${x}`);
}

function plus_one(x: number): number {
    // x + 1; ← Rust에서는 세미콜론을 붙이면 구문이 되어 반환값이 없습니다
    // TS에서는 명시적으로 return을 사용해야 하므로 이런 실수가 발생하지 않습니다
    return x + 1;
}

main();
