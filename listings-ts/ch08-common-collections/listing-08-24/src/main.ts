const scores = new Map<string, number>();
scores.set("Blue", 10);

// Rust: entry().or_insert() → 키가 없을 때만 삽입
// TypeScript: has()로 확인 후 set()
if (!scores.has("Yellow")) scores.set("Yellow", 50);
if (!scores.has("Blue")) scores.set("Blue", 50);

console.log(Object.fromEntries(scores)); // { Blue: 10, Yellow: 50 }
