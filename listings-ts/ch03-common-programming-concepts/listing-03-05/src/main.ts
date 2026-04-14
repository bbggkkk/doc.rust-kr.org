function main() {
    const a = [10, 20, 30, 40, 50];

    // Rust: for element in a → TS: for...of
    for (const element of a) {
        console.log(`the value is: ${element}`);
    }
}

main();
