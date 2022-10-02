export function percentageFormatter(value: number) {
  return `${String(value.toFixed(2)).replace('.', ',')}%`
}