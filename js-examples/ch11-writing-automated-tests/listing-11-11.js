// 여러 테스트 작성하기
// npx jest --testNamePattern="add" 로 필터링 가능
function addTwo(a) {
  return a + 2;
}

test('add_two_and_two', () => {
  expect(addTwo(2)).toBe(4);
});

test('add_three_and_two', () => {
  expect(addTwo(3)).toBe(5);
});

test('one_hundred', () => {
  expect(addTwo(100)).toBe(102);
});
