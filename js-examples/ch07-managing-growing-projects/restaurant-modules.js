// Rust의 mod → JS의 모듈/네임스페이스 패턴
// Rust에서는 mod 키워드로 모듈을 정의하고,
// JS에서는 파일 단위 또는 객체로 모듈을 구성합니다.

const frontOfHouse = {
  hosting: {
    addToWaitlist() {},
    seatAtTable() {},
  },
  serving: {
    takeOrder() {},
    serveOrder() {},
    takePayment() {},
  },
};

export default frontOfHouse;
