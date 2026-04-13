// 예제 7-3: 절대 경로와 상대 경로로 함수 호출하기
// Rust에서는 비공개 모듈에 접근할 수 없어서 컴파일 에러가 발생합니다

// JavaScript에서는 export하지 않으면 외부에서 접근할 수 없습니다
// 하지만 Rust처럼 모듈 내부의 공개/비공개 구분이 강제되지는 않습니다

const frontOfHouse = {
  hosting: {
    addToWaitlist() {},
    seatAtTable() {},
  },
};

function eatAtRestaurant() {
  // JavaScript에서는 접근 제한 없이 호출할 수 있습니다
  frontOfHouse.hosting.addToWaitlist();
}
