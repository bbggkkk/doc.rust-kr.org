// Rust: pub → JS: export
// Rust: crate::front_of_house::hosting → JS: import from 경로

// --- front_of_house/hosting.js ---
// export function addToWaitlist() {}

// --- main.js ---
import { addToWaitlist } from './front_of_house/hosting.js';

// 절대 경로 (Rust: crate::front_of_house::hosting::add_to_waitlist)
// JS에서는 프로젝트 루트 기준 경로로 import합니다.
addToWaitlist();

// 상대 경로 (Rust: front_of_house::hosting::add_to_waitlist)
// JS에서는 현재 파일 기준 상대 경로로 import합니다.
// import { addToWaitlist } from './front_of_house/hosting.js';
