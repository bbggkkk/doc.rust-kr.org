class Post {
  // --생략--

  approve(): void {
    if (this.state !== null) {
      this.state = this.state.approve();
    }
  }
}

interface State {
  requestReview(): State;
  approve(): State;
}

class Draft implements State {
  // --생략--
  requestReview(): State { return new PendingReview(); }

  approve(): State {
    return this;
  }
}

class PendingReview implements State {
  // --생략--
  requestReview(): State { return this; }

  approve(): State {
    return new Published();
  }
}

class Published implements State {
  requestReview(): State { return this; }
  approve(): State { return this; }
}
