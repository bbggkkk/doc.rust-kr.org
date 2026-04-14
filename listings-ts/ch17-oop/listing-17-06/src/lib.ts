// 제네릭 버전: 모든 컴포넌트가 동일한 타입이어야 함
class Screen<T extends Draw> {
  components: T[] = [];

  run(): void {
    for (const component of this.components) {
      component.draw();
    }
  }
}
