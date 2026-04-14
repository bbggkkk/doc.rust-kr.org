// Rust: use art::PrimaryColor;  (pub use 덕분에 최상위에서 import)
// Rust: use art::mix;
// re-export 덕분에 내부 모듈 구조를 몰라도 됨
import { PrimaryColor, mix } from "./art";

const red: PrimaryColor = "Red";
const yellow: PrimaryColor = "Yellow";
mix(red, yellow);
