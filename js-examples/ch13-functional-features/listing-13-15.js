// Rust의 iter().map().collect() → JS의 map() (즉시 실행됨)
const v1 = [1, 2, 3];

// JS의 map()은 Rust와 달리 게으르지 않고 즉시 새 배열을 반환
const v2 = v1.map(x => x + 1);

console.log(v2); // [2, 3, 4]
