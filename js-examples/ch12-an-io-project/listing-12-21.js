// 대소문자를 구분하지 않는 검색 함수
function search(query, contents) {
  const results = [];
  for (const line of contents.split('\n')) {
    if (line.includes(query)) {
      results.push(line);
    }
  }
  return results;
}

function searchCaseInsensitive(query, contents) {
  const lowerQuery = query.toLowerCase();
  const results = [];
  for (const line of contents.split('\n')) {
    if (line.toLowerCase().includes(lowerQuery)) {
      results.push(line);
    }
  }
  return results;
}

// Jest 테스트
test('case_sensitive', () => {
  const query = 'duct';
  const contents = `\
Rust:
safe, fast, productive.
Pick three.
Duct tape.`;

  expect(search(query, contents)).toEqual(['safe, fast, productive.']);
});

test('case_insensitive', () => {
  const query = 'rUsT';
  const contents = `\
Rust:
safe, fast, productive.
Pick three.
Trust me.`;

  expect(searchCaseInsensitive(query, contents)).toEqual(['Rust:', 'Trust me.']);
});

module.exports = { search, searchCaseInsensitive };
