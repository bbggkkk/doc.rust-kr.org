// #[cfg(test)]
describe("tests", () => {
  test("case_sensitive", () => {
    const query = "duct";
    const contents = `\
Rust:
safe, fast, productive.
Pick three.
Duct tape.`;

    expect(search(query, contents)).toEqual(["safe, fast, productive."]);
  });

  test("case_insensitive", () => {
    const query = "rUsT";
    const contents = `\
Rust:
safe, fast, productive.
Pick three.
Trust me.`;

    expect(searchCaseInsensitive(query, contents)).toEqual([
      "Rust:",
      "Trust me.",
    ]);
  });
});
