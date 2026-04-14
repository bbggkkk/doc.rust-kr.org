// Rust: "Зд".bytes() → 원시 바이트로 반복
// TypeScript: TextEncoder를 사용하여 UTF-8 바이트 얻기
const encoder = new TextEncoder();
for (const b of encoder.encode("Зд")) {
    console.log(b);
}
// 출력:
// 208
// 151
// 208
// 180
