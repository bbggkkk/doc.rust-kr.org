// [does_not_compile] Rust에서는 if 조건식이 반드시 bool이어야 합니다
function main() {
    const number = 3;

    // if (number) { ... } // TS/JS에서는 이것이 작동합니다 (truthy/falsy)
    // 하지만 Rust에서는 "if number"로 쓰면 에러가 발생합니다
    // Rust는 부울린이 아닌 값을 자동으로 부울린으로 변환하지 않습니다
    if (number) { // JS/TS에서는 허용되지만 Rust에서는 에러
        console.log("number was three");
    }
}

main();
