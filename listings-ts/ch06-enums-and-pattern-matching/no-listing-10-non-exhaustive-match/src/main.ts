// None 케이스를 다루지 않으면 → TS strict mode에서도 에러
function plus_one(x: number | null): number | null {
  // null 체크 없이 바로 사용하면 에러!
  // return x + 1; // Error: 'x' is possibly 'null'
  return x! + 1; // '!' 단언으로 무시 가능하지만 위험
}
