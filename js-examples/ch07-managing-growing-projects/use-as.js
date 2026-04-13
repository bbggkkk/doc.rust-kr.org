// Rust: use std::io::Result as IoResult;
// JS:   import { Result as IoResult } from '...';

// JS에서 이름 충돌을 해결하는 방법:
import { Result as FmtResult } from './fmt.js';
import { Result as IoResult } from './io.js';

function function1() {
  return new FmtResult();
}

function function2() {
  return new IoResult();
}
