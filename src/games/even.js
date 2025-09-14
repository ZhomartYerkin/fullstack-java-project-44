// src/games/even.js
import runGame from '../index.js'
import { rand } from '../utils.js'

const RULES = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = n => n % 2 === 0

const getRoundData = () => {
  const number = rand(1, 100)
  return {
    question: String(number),
    answer: isEven(number) ? 'yes' : 'no',
  }
}

export default () => runGame(RULES, getRoundData)
