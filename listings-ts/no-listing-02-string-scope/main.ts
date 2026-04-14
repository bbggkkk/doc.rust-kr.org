{
    const s = "hello"; // s는 이 지점부터 유효합니다
                       // Rust: String::from("hello")로 힙에 할당

    // s를 가지고 무언가 합니다
}                      // Rust에서는 여기서 drop이 호출되어 힙 메모리가 즉시 해제됩니다
                       // JS에서는 GC가 나중에 수거할 때까지 메모리에 남아있습니다
