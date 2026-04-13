// Rust의 pub use 다시 내보내기 → JS의 re-export

// 내부 모듈 구조 (kinds.js)
// export const PrimaryColor = { Red: 'Red', Yellow: 'Yellow', Blue: 'Blue' };

// 내부 모듈 구조 (utils.js)
// export function mix(c1, c2) { ... }

// Rust: pub use self::kinds::PrimaryColor;
// JS:   index.js에서 re-export
export { PrimaryColor, SecondaryColor } from "./kinds.js";
export { mix } from "./utils.js";

// 사용자는 내부 모듈 구조를 몰라도 됩니다:
// import { PrimaryColor, mix } from 'art';
