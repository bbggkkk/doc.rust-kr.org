function greeting(name: string): string {
  return `Hello ${name}!`;
}

// #[cfg(test)]
describe("tests", () => {
  test("greeting_contains_name", () => {
    const result = greeting("Carol");
    // assert!(result.contains("Carol"))
    expect(result).toContain("Carol");
  });
});
