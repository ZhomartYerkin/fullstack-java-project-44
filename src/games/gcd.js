// src/games/gcd.js

import runGame from '../index.js'
import { rand } from '../utils.js'

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

const getRoundData = () => {
  const a = rand(1, 100)
  const b = rand(1, 100)
  return {
    question: `${a} ${b}`,
    answer: String(gcd(a, b)),
  }
}

export default () => runGame(RULES, getRoundData)
