// Rust: super:: → JS: ../  (부모 디렉터리)

// --- deliver_order.js (루트 모듈) ---
// export function deliverOrder() {}

// --- back_of_house/fix_incorrect_order.js ---
import { deliverOrder } from '../deliver_order.js'; // super:: 에 해당

function cookOrder() {}

export function fixIncorrectOrder() {
  cookOrder();
  deliverOrder(); // super::deliver_order()에 해당
}
