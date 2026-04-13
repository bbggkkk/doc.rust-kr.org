// 예제 19-15: 서로 다른 타입 간의 Add 구현 (Millimeters + Meters)
// JS에서는 타입 시스템이 없으므로 클래스와 메서드로 표현합니다.

class Millimeters {
  constructor(value) {
    this.value = value;
  }

  addMeters(meters) {
    return new Millimeters(this.value + meters.value * 1000);
  }

  toString() {
    return `${this.value}mm`;
  }
}

class Meters {
  constructor(value) {
    this.value = value;
  }
}

const mm = new Millimeters(500);
const m = new Meters(1);
const result = mm.addMeters(m);

console.log(`${result}`); // 1500mm
