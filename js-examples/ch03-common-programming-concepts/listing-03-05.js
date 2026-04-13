// Rust: for element in a → 배열 순회
// JS: for...of로 동일한 패턴
const a = [10, 20, 30, 40, 50];

for (const element of a) {
    console.log(`the value is: ${element}`);
}

// 다른 방법: a.forEach(element => console.log(...))
