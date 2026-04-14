// if let Some(max) = config_max → if (config_max !== null)
const config_max: number | null = 3;

if (config_max !== null) {
  const max = config_max;
  console.log(`The maximum is configured to be ${max}`);
}
