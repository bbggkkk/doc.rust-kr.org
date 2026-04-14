// 클로저를 map에 전달 — TS에서도 동일한 패턴

const listOfNumbers = [1, 2, 3];
const listOfStrings: string[] =
  listOfNumbers.map((i) => i.toString());
