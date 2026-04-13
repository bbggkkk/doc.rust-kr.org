// 예제 19-28: vec! 매크로와 유사한 패턴
// 러스트의 매크로는 JS에 직접적으로 대응하는 기능이 없습니다.
// JS에서 가장 유사한 것은 배열 리터럴이나 헬퍼 함수입니다.

// Rust: let v: Vec<u32> = vec![1, 2, 3];
// JS에서는 배열 리터럴로 충분합니다.
const v = [1, 2, 3];

// 또는 코드 생성이 필요한 경우, 태그드 템플릿 리터럴이
// 매크로와 가장 유사한 패턴입니다.
function vec(strings, ...values) {
  return values.length > 0 ? values : [];
}

// Babel 매크로나 빌드 타임 코드 변환도 유사한 역할을 합니다.
// 예: babel-plugin-macros, SWC 플러그인
console.log(v); // [1, 2, 3]
