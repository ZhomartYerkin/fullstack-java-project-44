import runGame from '../index.js'
import { rand } from '../utils.js'

const RULES = 'What number is missing in the progression?'

const buildProgression = (start, step, length) => {
  const result = []
  for (let i = 0; i < length; i += 1) {
    result.push(start + i * step)
  }
  return result
}

const getRoundData = () => {
  const length = 10
  const start = rand(1, 10)
  const step = rand(2, 5)
  const hiddenIdx = rand(0, length - 1)

  const progression = buildProgression(start, step, length)
  const answer = String(progression[hiddenIdx])

  const question = progression
    .map((n, i) => (i === hiddenIdx ? '..' : n))
    .join(' ')

  return { question, answer }
}

export default () => runGame(RULES, getRoundData)
