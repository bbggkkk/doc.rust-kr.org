// 바이트 단위 반복

const s = "Зд";

// JavaScript에서 UTF-8 바이트를 얻으려면 TextEncoder를 사용합니다
const encoder = new TextEncoder();
const bytes = encoder.encode(s);
for (const b of bytes) {
  console.log(b);
}
// 출력: 208, 151, 208, 180
