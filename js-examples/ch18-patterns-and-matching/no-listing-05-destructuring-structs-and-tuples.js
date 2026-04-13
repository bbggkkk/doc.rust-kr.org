// Rust의 복잡한 중첩 해체 → JS의 중첩 구조 분해

const [[feet, inches], { x, y }] = [[3, 10], { x: 3, y: -10 }];
console.log(feet, inches, x, y); // 3 10 3 -10
