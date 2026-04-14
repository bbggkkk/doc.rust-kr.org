// #[cfg(test)] — 이 모듈은 테스트 실행 시에만 컴파일됩니다
describe("tests", () => {
  test("it_works", () => {
    const result = 2 + 2;
    expect(result).toBe(4);
  });
});
