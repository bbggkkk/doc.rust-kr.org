const scores = new Map<string, number>();

scores.set("Blue", 10);
scores.set("Yellow", 50);

const team_name = "Blue";
// Rust: .get(&key).copied().unwrap_or(0)
// TypeScript: .get(key) ?? 기본값
const score = scores.get(team_name) ?? 0;
