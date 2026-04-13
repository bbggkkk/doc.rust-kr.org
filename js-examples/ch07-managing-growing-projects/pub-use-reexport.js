// Rust: pub use → JS: export { ... } from '...' (다시 내보내기)

// --- front_of_house/hosting.js ---
// export function addToWaitlist() {}

// --- index.js (크레이트 루트) ---
// 다시 내보내기: 외부에서 hosting을 바로 접근 가능
export { addToWaitlist } from './front_of_house/hosting.js';

// 외부 사용자는 내부 구조를 몰라도 됩니다:
// import { addToWaitlist } from 'restaurant';
// (front_of_house를 알 필요 없음)
