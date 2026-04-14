namespace front_of_house {
    export namespace hosting {
        export function add_to_waitlist() {}
    }
}

// Rust: pub use → re-export (다시 내보내기)
// TypeScript: export로 다시 내보내기
export const hosting = front_of_house.hosting;

export function eat_at_restaurant() {
    hosting.add_to_waitlist();
}
