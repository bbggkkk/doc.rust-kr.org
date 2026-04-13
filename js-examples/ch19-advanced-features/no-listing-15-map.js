// map에 클로저 또는 함수 전달하기
// JS에서도 map에 화살표 함수나 함수 참조를 전달할 수 있습니다.

// 클로저 (화살표 함수) 사용
const list1 = [1, 2, 3].map((i) => i.toString());
console.log(list1); // ["1", "2", "3"]

// 함수 참조 사용
const list2 = [1, 2, 3].map(String);
console.log(list2); // ["1", "2", "3"]

// 열거형 이니셜라이저와 유사한 패턴
class StatusValue {
  constructor(value) {
    this.type = "Value";
    this.value = value;
  }
}

const statusList = [0, 1, 2].map((v) => new StatusValue(v));
console.log(statusList);
