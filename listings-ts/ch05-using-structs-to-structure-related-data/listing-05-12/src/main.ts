// #[derive(Debug)] → TS에서는 JSON.stringify로 디버그 출력
interface Rectangle {
  width: number;
  height: number;
}

const rect1: Rectangle = {
  width: 30,
  height: 50,
};

// {:?} 디버그 출력 → JSON.stringify
console.log(`rect1 is ${JSON.stringify(rect1)}`);
