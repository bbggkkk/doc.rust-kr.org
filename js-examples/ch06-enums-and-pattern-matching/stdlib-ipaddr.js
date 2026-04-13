// 표준 라이브러리의 IpAddr 정의 — JavaScript에는 직접 대응하는 것이 없습니다

// Rust에서는 열거형 배리언트에 구조체를 담을 수 있습니다
// JavaScript에서는 클래스와 팩토리 패턴으로 유사하게 표현합니다

class Ipv4Addr {
  // ...세부 구현 생략
}

class Ipv6Addr {
  // ...세부 구현 생략
}

class IpAddr {
  constructor(type, addr) {
    this.type = type;
    this.addr = addr;
  }

  static V4(addr) {
    return new IpAddr("V4", addr);
  }

  static V6(addr) {
    return new IpAddr("V6", addr);
  }
}
