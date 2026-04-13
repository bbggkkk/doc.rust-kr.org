// pub use로 재내보내기한 아이템 사용
// Rust: use art::PrimaryColor; use art::mix;
// JS: 패키지의 index.js에서 재내보내기

// art/index.js에서:
// export { PrimaryColor } from './kinds.js';
// export { mix } from './utils.js';
//
// 사용하는 쪽에서:
// import { PrimaryColor, mix } from 'art';

// JS의 package.json "exports" 필드와 barrel 파일(index.js)은
// Rust의 pub use와 유사한 역할을 합니다.
