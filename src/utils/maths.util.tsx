export function clamp(value: number, lowerbound: number, upperbound: number) {
  return Math.min(Math.max(value, lowerbound), upperbound)
}
