import runGame from '../index.js'

const RULES = 'Find the greatest common divisor of given numbers.'

const abs = n => (n < 0 ? -n : n)

const gcd = (a, b) => {
  let x = abs(a)
  let y = abs(b)

  while (y !== 0) {
    const r = x % y
    x = y
    y = r
  }
  return x
}

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const getRoundData = () => {
  const a = rand(1, 100)
  const b = rand(1, 100)
  return {
    question: `${a} ${b}`,
    answer: gcd(a, b),
  }
}

export default () => runGame(RULES, getRoundData)
