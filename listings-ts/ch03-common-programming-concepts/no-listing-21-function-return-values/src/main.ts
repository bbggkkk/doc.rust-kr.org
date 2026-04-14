function five(): number {
    return 5; // Rust: 세미콜론 없이 5만 쓰면 반환값
}

function main() {
    const x = five();

    console.log(`The value of x is: ${x}`);
}

main();
