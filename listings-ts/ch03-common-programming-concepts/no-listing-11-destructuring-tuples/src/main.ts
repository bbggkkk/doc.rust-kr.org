function main() {
    const tup: [number, number, number] = [500, 6.4, 1];

    // 구조 해체 (destructuring)
    const [x, y, z] = tup;

    console.log(`The value of y is: ${y}`);
}

main();
