// assert! 매크로 → expect(...).toBeTruthy()
const { Rectangle } = require('./listing-11-05');

test('larger_can_hold_smaller', () => {
  const larger = new Rectangle(8, 7);
  const smaller = new Rectangle(5, 1);
  expect(larger.canHold(smaller)).toBeTruthy();
});

test('smaller_cannot_hold_larger', () => {
  const larger = new Rectangle(8, 7);
  const smaller = new Rectangle(5, 1);
  expect(smaller.canHold(larger)).toBeFalsy();
});
