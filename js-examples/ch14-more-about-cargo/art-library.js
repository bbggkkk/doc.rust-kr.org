// Rust의 모듈 구조 → JS의 모듈 시스템
// art 크레이트: kinds 모듈과 utils 모듈로 구성

// kinds 모듈
export const PrimaryColor = Object.freeze({
  Red: "Red",
  Yellow: "Yellow",
  Blue: "Blue",
});

export const SecondaryColor = Object.freeze({
  Orange: "Orange",
  Green: "Green",
  Purple: "Purple",
});

// utils 모듈
export function mix(c1, c2) {
  // 색상 혼합 로직
  return `${c1} + ${c2}`;
}
