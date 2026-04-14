function main() {
    const v = [1, 2, 3];

    // JS/TS에서는 범위 밖 접근 시 undefined를 반환 (에러가 아님)
    // Rust에서는 panic! 발생
    console.log(v[99]); // undefined (Rust에서는 패닉)
}

main();
