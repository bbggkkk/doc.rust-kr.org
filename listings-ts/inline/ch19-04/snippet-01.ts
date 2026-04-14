// Rust: Box<dyn Fn() + Send + 'static>
// TS: () => void (함수 타입)
// Rust의 Box는 힙 할당 스마트 포인터, dyn Fn()은 트레이트 객체
type BoxedFn = () => void;
