// #[cfg(test)]
describe("tests", () => {
  test("one_result", () => {
    const query = "duct";
    const contents = `\
Rust:
safe, fast, productive.
Pick three.`;

    expect(search(query, contents)).toEqual(["safe, fast, productive."]);
  });
});
