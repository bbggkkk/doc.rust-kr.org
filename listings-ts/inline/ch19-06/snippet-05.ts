// 속성형 매크로: Rust의 #[route(GET, "/")] → TS의 데코레이터
// TS 데코레이터가 개념적으로 가장 유사

// Rust:
// #[route(GET, "/")]
// fn index() { }

// TS: 데코레이터로 유사하게 표현
function route(method: string, path: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // 라우트 등록 로직
  };
}

class Controller {
  @route("GET", "/")
  index() {}
}
