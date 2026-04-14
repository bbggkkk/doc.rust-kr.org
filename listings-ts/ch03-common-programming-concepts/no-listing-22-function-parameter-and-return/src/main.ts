function main() {
    const x = plus_one(5);

    console.log(`The value of x is: ${x}`);
}

function plus_one(x: number): number {
    return x + 1;
}

main();
