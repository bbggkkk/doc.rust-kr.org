const field_name = "Favorite color";
const field_value = "Blue";

const map = new Map<string, string>();
map.set(field_name, field_value);
// TypeScript에서는 문자열이 원시 타입이므로 소유권 이동 없음
// field_name과 field_value는 여전히 사용 가능
// Rust에서는 String이 해시맵으로 이동되어 더 이상 사용 불가
