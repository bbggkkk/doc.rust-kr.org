// Rust: fn second_word(s: &String) -> &str
// JS에서는 substring을 직접 반환하면 됩니다.
function secondWord(s) {
  const firstSpace = s.indexOf(" ");
  if (firstSpace === -1) return "";
  const rest = s.slice(firstSpace + 1);
  const secondSpace = rest.indexOf(" ");
  return secondSpace === -1 ? rest : rest.slice(0, secondSpace);
}
