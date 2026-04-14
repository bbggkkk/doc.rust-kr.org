// #[cfg(test)]
describe("tests", () => {
  // use super::* — 부모 모듈에서 가져오기
  test("larger_can_hold_smaller", () => {
    const larger: Rectangle = { width: 8, height: 7 };
    const smaller: Rectangle = { width: 5, height: 1 };

    // assert!(larger.can_hold(&smaller))
    expect(canHold(larger, smaller)).toBe(true);
  });
});
