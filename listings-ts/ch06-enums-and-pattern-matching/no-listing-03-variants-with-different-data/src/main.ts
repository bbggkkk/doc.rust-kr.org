// 배리언트마다 다른 데이터 → 구별된 유니온
type IpAddr =
  | { kind: "V4"; values: [number, number, number, number] }
  | { kind: "V6"; value: string };

const home: IpAddr = { kind: "V4", values: [127, 0, 0, 1] };

const loopback: IpAddr = { kind: "V6", value: "::1" };
