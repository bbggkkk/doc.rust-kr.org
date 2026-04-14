type IpAddrKind = "V4" | "V6";

interface IpAddr {
  kind: IpAddrKind;
  address: string;
}

const home: IpAddr = {
  kind: "V4",
  address: "127.0.0.1",
};

const loopback: IpAddr = {
  kind: "V6",
  address: "::1",
};
