const v1: number[] = [1, 2, 3];

// Rust: let v2: Vec<_> = v1.iter().map(|x| x + 1).collect();
// .map(|x| x + 1) → .map((x) => x + 1)
// .collect() → JS의 .map()은 이미 배열을 반환하므로 collect 불필요
const v2 = v1.map((x) => x + 1);

console.assert(JSON.stringify(v2) === JSON.stringify([2, 3, 4]));
