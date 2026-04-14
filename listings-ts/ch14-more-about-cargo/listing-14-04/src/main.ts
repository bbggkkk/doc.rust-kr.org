// Rust: use art::kinds::PrimaryColor;
// Rust: use art::utils::mix;
// 내부 모듈 구조를 알아야 import 가능 → 불편함
import { PrimaryColor } from "./art/kinds";
import { mix } from "./art/utils";

const red: PrimaryColor = "Red";
const yellow: PrimaryColor = "Yellow";
mix(red, yellow);
