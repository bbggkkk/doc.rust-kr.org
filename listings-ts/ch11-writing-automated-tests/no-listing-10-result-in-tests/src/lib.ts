// Result<T, E>를 사용한 테스트 — TS에서는 try-catch로 표현
describe("tests", () => {
  test("it_works", () => {
    // Result<(), String> 반환 대신, 예외를 던져 실패 표현
    if (2 + 2 === 4) {
      return; // Ok(())
    } else {
      throw new Error("two plus two does not equal four"); // Err(...)
    }
  });
});
