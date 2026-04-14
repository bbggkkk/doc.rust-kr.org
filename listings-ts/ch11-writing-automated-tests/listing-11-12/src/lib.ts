export function addTwo(a: number): number {
  return internalAdder(a, 2);
}

// 비공개 함수 — TS에서는 export하지 않으면 모듈 외부에서 접근 불가
function internalAdder(a: number, b: number): number {
  return a + b;
}

// #[cfg(test)]
describe("tests", () => {
  // use super::* — 같은 모듈 내이므로 비공개 함수에 접근 가능
  test("internal", () => {
    expect(internalAdder(2, 2)).toBe(4);
  });
});
