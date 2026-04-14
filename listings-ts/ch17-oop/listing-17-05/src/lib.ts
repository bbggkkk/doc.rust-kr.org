class Screen {
  components: Draw[] = [];

  run(): void {
    for (const component of this.components) {
      component.draw();
    }
  }
}
