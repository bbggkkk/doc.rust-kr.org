// State 인터페이스 (트레이트 → 인터페이스)
interface State {}

class Draft implements State {}

// dyn State → State 인터페이스 타입
class Post {
  private state: State | null = new Draft();
  private _content: string = "";

  constructor() {
    // Post::new → constructor
    this.state = new Draft();
    this._content = "";
  }
}
