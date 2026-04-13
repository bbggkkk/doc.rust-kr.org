// Rust: 열거형 이니셜라이저 함수를 map의 인수로 사용
// JavaScript에서는 클래스 생성자나 팩토리 함수를 사용합니다

class Status {
  constructor(value) {
    this.type = "Value";
    this.value = value;
  }
}

const listOfStatuses = Array.from({ length: 20 }, (_, i) => new Status(i));
console.log(listOfStatuses[0]); // Status { type: 'Value', value: 0 }
