// 예제 7-12: use 구문은 사용된 스코프 내에서만 적용됩니다
// Rust에서는 자식 모듈에서 부모의 use를 자동으로 사용할 수 없습니다

// JavaScript에서도 import는 해당 파일 내에서만 유효합니다
// 다른 모듈에서 사용하려면 해당 모듈에서 별도로 import해야 합니다

// parent.js
import { hosting } from "./front_of_house/hosting.js";

// customer.js — 별도의 import가 필요합니다
// import { hosting } from "./front_of_house/hosting.js";
