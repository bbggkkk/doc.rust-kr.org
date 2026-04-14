// 열거형 배리언트에 구조체를 넣는 표준 라이브러리 패턴
interface Ipv4Addr {
  // --생략--
}

interface Ipv6Addr {
  // --생략--
}

type IpAddr =
  | { kind: "V4"; value: Ipv4Addr }
  | { kind: "V6"; value: Ipv6Addr };
