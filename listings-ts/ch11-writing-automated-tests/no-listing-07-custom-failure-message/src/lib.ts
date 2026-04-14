describe("tests", () => {
  test("greeting_contains_name", () => {
    const result = greeting("Carol");
    // 커스텀 실패 메시지를 포함한 단언
    expect(result).toContain("Carol");
    // 또는 직접 메시지를 작성:
    // if (!result.includes("Carol")) {
    //   throw new Error(`Greeting did not contain name, value was "${result}"`);
    // }
  });
});
