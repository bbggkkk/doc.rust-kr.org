// 예제 7-13: use로 함수를 직접 가져오기 (보편적이지 않은 방식)

// JavaScript에서는 함수를 직접 import하는 것이 일반적입니다
import { addToWaitlist } from "./front_of_house/hosting.js";

function eatAtRestaurant() {
  // 어디서 온 함수인지 불분명해질 수 있습니다
  addToWaitlist();
}
