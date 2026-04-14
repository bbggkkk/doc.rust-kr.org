// if let Some(x) = some_option_value → null 체크
const someOptionValue: number | null = null;
if (someOptionValue !== null) {
  const x = someOptionValue;
  console.log(x);
}
