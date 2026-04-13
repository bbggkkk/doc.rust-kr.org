// 예제 10-3: 두 리스트에서 가장 큰 수를 찾는 추상화된 코드
// JS에서는 함수 추출로 중복을 제거합니다.
// 동적 타이핑이므로 제네릭 없이도 어떤 비교 가능한 값이든 처리할 수 있습니다.

function largest(list) {
  let result = list[0];
  for (const item of list) {
    if (item > result) {
      result = item;
    }
  }
  return result;
}

const numberList1 = [34, 50, 25, 100, 65];
console.log(`The largest number is ${largest(numberList1)}`);

const numberList2 = [102, 34, 6000, 89, 54, 2, 43, 8];
console.log(`The largest number is ${largest(numberList2)}`);
