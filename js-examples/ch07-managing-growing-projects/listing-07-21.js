// 예제 7-21: 모듈을 별도 파일로 분리 — 선언부만 남기기

// JavaScript에서는 import 문으로 다른 파일의 모듈을 가져옵니다
import { hosting } from "./front_of_house.js";

// pub use에 해당 — 다시 내보내기
export { hosting };

function eatAtRestaurant() {
  hosting.addToWaitlist();
}
