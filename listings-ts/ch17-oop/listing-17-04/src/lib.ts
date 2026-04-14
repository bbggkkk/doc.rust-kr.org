// Draw 인터페이스를 구현한 모든 객체를 담을 수 있는 배열
// Box<dyn Draw> → Draw 인터페이스 타입
class Screen {
  components: Draw[] = [];
}
