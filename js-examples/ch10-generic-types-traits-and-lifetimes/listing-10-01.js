// 예제 10-1: 숫자 리스트에서 가장 큰 수 찾기
// JS에서는 동적 타이핑 덕분에 제네릭 없이도 자연스럽게 처리됩니다.

const numberList = [34, 50, 25, 100, 65];

let largest = numberList[0];

for (const number of numberList) {
  if (number > largest) {
    largest = number;
  }
}

console.log(`The largest number is ${largest}`);
// 또는 간단히: Math.max(...numberList)
