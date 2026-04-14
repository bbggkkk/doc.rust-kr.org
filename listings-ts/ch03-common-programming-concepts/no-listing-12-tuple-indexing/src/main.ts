function main() {
    const x: [number, number, number] = [500, 6.4, 1];

    // Rust: x.0, x.1, x.2 → TS: x[0], x[1], x[2]
    const five_hundred = x[0];

    const six_point_four = x[1];

    const one = x[2];
}

main();
