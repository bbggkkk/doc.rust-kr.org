// [does_not_compile] Rust에서 let 구문은 값을 반환하지 않습니다
function main() {
    // const x = (const y = 6); // Error: 할당문은 값을 반환하지 않습니다
    // TS/JS에서는 사실 할당 표현식이 값을 반환하지만,
    // const/let 선언문은 값을 반환하지 않습니다
    // Rust는 C/Ruby와 달리 x = y = 6 같은 패턴을 허용하지 않습니다
}

main();
