// Rust: 열거형 배리언트를 이니셜라이저 함수로 사용
// TS: 클래스 생성자나 팩토리 함수를 map에 전달

class Status {
  constructor(public kind: "Value" | "Stop", public value?: number) {}

  static Value(v: number): Status {
    return new Status("Value", v);
  }
  static Stop = new Status("Stop");
}

// Rust: (0u32..20).map(Status::Value).collect()
const listOfStatuses: Status[] =
  Array.from({ length: 20 }, (_, i) => Status.Value(i));
