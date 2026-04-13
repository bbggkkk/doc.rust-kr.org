// Rust의 구조체 필드 축약 해체 → JS의 객체 축약 구조 분해

const p = { x: 0, y: 7 };
const { x, y } = p; // 필드명과 같은 변수명으로 분해
console.log(x, y); // 0 7
