// 반박 불가능한 패턴에 if let 사용 — 불필요한 조건문
// TS에서는 항상 참인 조건은 린터 경고 대상
const x = 5;
if (true) {  // 항상 참 — 불필요한 조건
  console.log(x);
}
