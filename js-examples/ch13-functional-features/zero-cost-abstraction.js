// 성능 비교: Rust의 비용 없는 추상화 vs JS
//
// Rust에서는 반복자가 컴파일 시 저수준 코드로 최적화됩니다 (zero-cost abstraction).
// JS에서는 V8 등의 엔진이 JIT 컴파일로 최적화하지만,
// 런타임 오버헤드가 존재합니다.

// 오디오 디코더 선형 예측 예시 (JS 버전)
const buffer = new Int32Array(100).fill(0);
const coefficients = new BigInt64Array(12).fill(1n);
const qlpShift = 4n;

for (let i = 12; i < buffer.length; i++) {
  let prediction = 0n;
  for (let j = 0; j < 12; j++) {
    prediction += coefficients[j] * BigInt(buffer[i - 12 + j]);
  }
  prediction >>= qlpShift;
  const delta = buffer[i];
  buffer[i] = Number(prediction) + delta;
}

// JS에서도 함수형 스타일로 작성할 수 있지만,
// Rust처럼 컴파일 타임 언롤링이나 레지스터 최적화는 불가능합니다.
