// #[derive(Debug)] → TS에서는 console.log로 디버그 출력
interface Rectangle {
  width: number;
  height: number;
}

const scale = 2;
const rect1: Rectangle = {
  // dbg! → console.log로 중간 값 확인
  width: (() => { const v = 30 * scale; console.log(`[src/main.ts:9] 30 * scale = ${v}`); return v; })(),
  height: 50,
};

// dbg!(&rect1) → console.log
console.log("[src/main.ts:13] rect1 =", JSON.stringify(rect1, null, 2));
