// match + Option → if 분기
const config_max: number | null = 3;

// match config_max { Some(max) => ..., _ => () }
if (config_max !== null) {
  const max = config_max;
  console.log(`The maximum is configured to be ${max}`);
}
