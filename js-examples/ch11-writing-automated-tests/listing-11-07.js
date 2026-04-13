// assert_eq! 매크로 → expect(...).toBe(...)
function addTwo(a) {
  return a + 2;
}

test('it_adds_two', () => {
  expect(addTwo(2)).toBe(4);
});
