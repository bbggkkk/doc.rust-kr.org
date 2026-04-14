// Rust: mod front_of_house; → 별도 파일에서 모듈 가져오기
// TypeScript: import로 파일 모듈 가져오기
import * as front_of_house from "./front_of_house";

// Rust: pub use → re-export
export const hosting = front_of_house.hosting;

export function eat_at_restaurant() {
    hosting.add_to_waitlist();
}
