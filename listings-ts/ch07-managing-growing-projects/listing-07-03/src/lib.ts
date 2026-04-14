// [does_not_compile] hosting 모듈이 비공개(export 없음)이므로 외부에서 접근 불가
namespace front_of_house {
    // export 없음 → 비공개
    namespace hosting {
        function add_to_waitlist() {}
    }
}

export function eat_at_restaurant() {
    // 절대 경로 (Rust의 crate:: → 프로젝트 루트에서의 경로)
    // front_of_house.hosting.add_to_waitlist(); // Error: hosting이 비공개

    // 상대 경로
    // front_of_house.hosting.add_to_waitlist(); // Error: hosting이 비공개
}
