class Post {
  // --생략--

  requestReview(): void {
    if (this.state !== null) {
      this.state = this.state.requestReview();
    }
  }
}

interface State {
  requestReview(): State;
}

class Draft implements State {
  requestReview(): State {
    return new PendingReview();
  }
}

class PendingReview implements State {
  requestReview(): State {
    return this;
  }
}
