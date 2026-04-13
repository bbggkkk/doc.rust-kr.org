const scores = new Map();
scores.set("Blue", 10);
scores.set("Yellow", 50);

// Rust의 scores.get(&team_name).copied().unwrap_or(0)
// -> JS의 Map.get()은 키가 없으면 undefined 반환
const teamName = "Blue";
const score = scores.get(teamName) ?? 0; // nullish coalescing으로 기본값 설정
