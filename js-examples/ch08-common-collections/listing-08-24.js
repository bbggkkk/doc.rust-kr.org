// Rust의 entry().or_insert() -> JS에서는 has()로 확인 후 삽입
const scores = new Map();
scores.set("Blue", 10);

// 키가 없을 때만 삽입
if (!scores.has("Yellow")) scores.set("Yellow", 50);
if (!scores.has("Blue")) scores.set("Blue", 50); // 이미 있으므로 무시됨

console.log(scores); // Map { 'Blue' => 10, 'Yellow' => 50 }
