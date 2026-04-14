// #[cfg(test)]
describe("tests", () => {
  // use super::*
  test("larger_can_hold_smaller", () => {
    // --생략--
  });

  test("smaller_cannot_hold_larger", () => {
    const larger: Rectangle = { width: 8, height: 7 };
    const smaller: Rectangle = { width: 5, height: 1 };

    // assert!(!smaller.can_hold(&larger))
    expect(canHold(smaller, larger)).toBe(false);
  });
});
