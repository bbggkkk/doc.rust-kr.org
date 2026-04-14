class AveragedCollection {
  private list: number[] = [];
  private _average: number = 0;

  add(value: number): void {
    this.list.push(value);
    this.updateAverage();
  }

  remove(): number | null {
    const result = this.list.pop();
    if (result !== undefined) {
      this.updateAverage();
      return result;
    }
    return null;
  }

  get average(): number {
    return this._average;
  }

  private updateAverage(): void {
    const total = this.list.reduce((a, b) => a + b, 0);
    this._average = total / this.list.length;
  }
}
