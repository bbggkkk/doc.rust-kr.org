// 예제 19-10: 가변 정적 변수
// JS에서는 let으로 선언한 모듈 스코프 변수가 유사합니다.
// JS는 싱글스레드이므로 데이터 경합 문제가 없습니다.

let counter = 0;

function addToCount(inc) {
  counter += inc;
}

addToCount(1);
addToCount(1);
addToCount(1);

console.log(`COUNTER: ${counter}`);
