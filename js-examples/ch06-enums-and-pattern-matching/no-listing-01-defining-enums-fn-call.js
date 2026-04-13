// 열거형 배리언트로 함수 호출하기

const IpAddrKind = Object.freeze({
  V4: "V4",
  V6: "V6",
});

function route(ipKind) {
  // 함수 본문
}

route(IpAddrKind.V4);
route(IpAddrKind.V6);
