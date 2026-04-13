// 예제 19-23: 뉴타입 패턴 - Vec<String>을 감싼 Wrapper
// JS에서는 클래스로 래핑하여 커스텀 동작을 추가할 수 있습니다.

class Wrapper {
  constructor(items) {
    this.items = items;
  }

  // Display 트레이트에 해당하는 toString 구현
  toString() {
    return `[${this.items.join(", ")}]`;
  }
}

const w = new Wrapper(["hello", "world"]);
console.log(`w = ${w}`); // w = [hello, world]
