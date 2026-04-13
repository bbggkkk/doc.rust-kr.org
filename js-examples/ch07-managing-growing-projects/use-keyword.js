// Rust: use crate::front_of_house::hosting;
// JS:   import hosting from './front_of_house/hosting.js';

// Rust의 use는 JS의 import와 같은 역할을 합니다.
// 긴 경로를 반복하지 않고 짧은 이름으로 사용할 수 있게 합니다.

import { hosting } from './front_of_house.js';

export function eatAtRestaurant() {
  hosting.addToWaitlist();
}
