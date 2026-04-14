interface Rectangle {
  width: number;
  height: number;
}

const rect1: Rectangle = {
  width: 30,
  height: 50,
};

// Rust에서는 Display 트레이트가 없어서 에러 발생
// TS에서는 그냥 [object Object]로 출력됨
console.log(`rect1 is ${rect1}`);
