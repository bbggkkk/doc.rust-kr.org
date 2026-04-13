// Rust에서는 구조체가 참조자를 가지면 라이프타임을 명시해야 합니다.
// 참조 대상이 구조체보다 먼저 해제되면 댕글링 참조가 발생하기 때문입니다.
// JS에서는 GC가 참조되는 한 객체를 해제하지 않으므로 이런 문제가 없습니다.
class ImportantExcerpt {
    constructor(part) {
        this.part = part; // GC가 part의 수명을 자동 관리합니다
    }
}

const novel = "Call me Ishmael. Some years ago...";
const firstSentence = novel.split('.')[0];
const excerpt = new ImportantExcerpt(firstSentence);
