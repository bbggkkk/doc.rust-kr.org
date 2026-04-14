const scores = new Map<string, number>();

scores.set("Blue", 10);
scores.set("Yellow", 50);

// Rust: for (key, value) in &scores
for (const [key, value] of scores) {
    console.log(`${key}: ${value}`);
}
