export const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export const abs = n => (n < 0 ? -n : n)

export const gcd = (a, b) => {
  let x = abs(a)
  let y = abs(b)
  while (y !== 0) {
    const r = x % y
    x = y
    y = r
  }
  return x
}

export const buildProgression = (start, step, length) => {
  const result = []
  for (let i = 0; i < length; i += 1) {
    result.push(start + i * step)
  }
  return result
}

export const isPrime = (n) => {
  if (n < 2) return false
  if (n % 2 === 0) return n === 2
  const limit = Math.floor(Math.sqrt(n))
  for (let d = 3; d <= limit; d += 2) {
    if (n % d === 0) return false
  }
  return true
}
