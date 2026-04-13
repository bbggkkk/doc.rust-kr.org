// Rust의 튜플에서 일부 값 무시 → JS의 구조 분해에서 건너뛰기

const numbers = [2, 4, 8, 16, 32];

const [first, , third, , fifth] = numbers;
console.log(`Some numbers: ${first}, ${third}, ${fifth}`);
