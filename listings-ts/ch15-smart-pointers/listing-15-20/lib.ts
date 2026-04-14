// Rust의 Messenger 트레이트 → TS의 인터페이스

interface Messenger {
  send(msg: string): void;
}

class LimitTracker {
  private value: number = 0;

  constructor(
    private messenger: Messenger,
    private max: number
  ) {}

  setValue(value: number): void {
    this.value = value;

    const percentageOfMax = this.value / this.max;

    if (percentageOfMax >= 1.0) {
      this.messenger.send("Error: You are over your quota!");
    } else if (percentageOfMax >= 0.9) {
      this.messenger.send(
        "Urgent warning: You've used up over 90% of your quota!"
      );
    } else if (percentageOfMax >= 0.75) {
      this.messenger.send(
        "Warning: You've used up over 75% of your quota!"
      );
    }
  }
}
