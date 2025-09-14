import runGame from '../index.js'
import { rand } from '../utils.js'

const RULES = 'What is the result of the expression?'
const OPS = ['+', '-', '*']

const compute = (a, b, op) => {
  switch (op) {
    case '+': return a + b
    case '-': return a - b
    case '*': return a * b
    default: throw new Error(`Unknown op: ${op}`)
  }
}

const getRoundData = () => {
  const a = rand(1, 50)
  const b = rand(1, 50)
  const op = OPS[rand(0, OPS.length - 1)]
  return {
    question: `${a} ${op} ${b}`,
    answer: String(compute(a, b, op)),
  }
}

export default () => runGame(RULES, getRoundData)
