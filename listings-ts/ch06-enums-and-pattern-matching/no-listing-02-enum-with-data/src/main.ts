// 데이터를 가진 열거형 → 구별된 유니온 (discriminated union)
type IpAddr =
  | { kind: "V4"; value: string }
  | { kind: "V6"; value: string };

const home: IpAddr = { kind: "V4", value: "127.0.0.1" };

const loopback: IpAddr = { kind: "V6", value: "::1" };
