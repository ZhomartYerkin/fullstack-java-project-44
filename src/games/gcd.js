// src/games/gcd.js

import runGame from '../index.js'
import { rand, gcd } from '../utils.js'

const RULES = 'Find the greatest common divisor of given numbers.'

const getRoundData = () => {
  const a = rand(1, 100)
  const b = rand(1, 100)
  return {
    question: `${a} ${b}`,
    answer: String(gcd(a, b)),
  }
}

export default () => runGame(RULES, getRoundData)
