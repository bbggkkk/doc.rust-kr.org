// search 함수 구현 및 테스트
function search(query, contents) {
  const results = [];
  for (const line of contents.split('\n')) {
    if (line.includes(query)) {
      results.push(line);
    }
  }
  return results;
}

// Jest 테스트
test('one_result', () => {
  const query = 'duct';
  const contents = `\
Rust:
safe, fast, productive.
Pick three.`;

  expect(search(query, contents)).toEqual(['safe, fast, productive.']);
});

module.exports = { search };
