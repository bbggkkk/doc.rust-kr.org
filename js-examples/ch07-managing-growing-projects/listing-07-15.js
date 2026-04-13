// 예제 7-15: 이름이 같은 두 타입을 구별하기 위해 부모 모듈 명시

// JavaScript에서는 import 시 as를 사용하여 이름 충돌을 해결합니다
import { Result as FmtResult } from "./fmt.js";
import { Result as IoResult } from "./io.js";

function function1() {
  return new FmtResult();
}

function function2() {
  return new IoResult();
}
