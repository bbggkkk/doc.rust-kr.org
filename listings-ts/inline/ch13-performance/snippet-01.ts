// Rust 오디오 디코더의 반복자 체인 → TypeScript 표현
const buffer: number[] = new Array(100).fill(0);
const coefficients: number[] = new Array(12).fill(0);
const qlpShift = 4;

for (let i = 12; i < buffer.length; i++) {
  // Rust: coefficients.iter()
  //         .zip(&buffer[i - 12..i])
  //         .map(|(&c, &s)| c * s as i64)
  //         .sum::<i64>() >> qlp_shift;
  // .zip() → 두 배열을 쌍으로 묶기 (JS에는 내장 zip이 없음)
  // .map()  → .map()
  // .sum()  → .reduce()
  const prediction = coefficients
    .map((c, j) => c * buffer[i - 12 + j])  // zip + map
    .reduce((acc, val) => acc + val, 0)       // sum
    >> qlpShift;

  const delta = buffer[i];
  buffer[i] = prediction + delta;
}
