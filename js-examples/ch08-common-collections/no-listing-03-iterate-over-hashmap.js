// Rust의 for (key, value) in &scores -> JS의 Map.forEach 또는 for...of
const scores = new Map();
scores.set("Blue", 10);
scores.set("Yellow", 50);

for (const [key, value] of scores) {
    console.log(`${key}: ${value}`);
}
