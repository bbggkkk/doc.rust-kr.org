// 테스트에서 console.log 출력 확인하기
// Jest에서는 --verbose 플래그로 출력을 볼 수 있음
function printAndReturnTen(a) {
  console.log(`I got the value ${a}`);
  return 10;
}

test('this_test_will_pass', () => {
  const value = printAndReturnTen(4);
  expect(value).toBe(10);
});

test('this_test_will_fail', () => {
  const value = printAndReturnTen(8);
  expect(value).toBe(5);
});
