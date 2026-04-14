// Rust: Animal::baby_name() — self가 없는 연관 함수라 어떤 구현체인지 알 수 없음
// TS에서는 정적 메서드이므로 클래스명으로 구분 가능

// Rust에서는 이 코드가 컴파일 에러:
// println!("A baby dog is called a {}", Animal::baby_name());
// → 어떤 타입의 Animal 구현인지 알 수 없기 때문
