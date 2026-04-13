// 예제 10-2: 두 개의 숫자 리스트에서 가장 큰 숫자를 찾는 코드
// JS에서도 중복 코드 문제는 동일하게 발생합니다.

const numberList1 = [34, 50, 25, 100, 65];

let largest1 = numberList1[0];
for (const number of numberList1) {
  if (number > largest1) {
    largest1 = number;
  }
}
console.log(`The largest number is ${largest1}`);

const numberList2 = [102, 34, 6000, 89, 54, 2, 43, 8];

let largest2 = numberList2[0];
for (const number of numberList2) {
  if (number > largest2) {
    largest2 = number;
  }
}
console.log(`The largest number is ${largest2}`);
