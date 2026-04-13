// Rust: mod front_of_house; (별도 파일로 분리)
// JS: import (ES 모듈은 기본적으로 파일 단위)

// --- front_of_house/hosting.js ---
export function addToWaitlist() {}

// --- front_of_house.js ---
export { addToWaitlist } from './front_of_house/hosting.js';

// --- lib.js ---
import { addToWaitlist } from './front_of_house/hosting.js';
// pub use에 해당:
export { addToWaitlist };

export function eatAtRestaurant() {
  addToWaitlist();
}
