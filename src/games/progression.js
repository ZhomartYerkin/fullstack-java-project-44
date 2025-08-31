import runGame from '../index.js'

const RULES = 'What number is missing in the progression?'

const getRandomInt = (min, max) => {
  const mn = Math.ceil(min)
  const mx = Math.floor(max)
  return Math.floor(Math.random() * (mx - mn + 1)) + mn // [min, max]
}

const buildProgression = (start, step, length) => {
  const arr = []
  for (let i = 0; i < length; i += 1) {
    arr.push(start + step * i)
  }
  return arr
}

const makeRound = () => {
  const length = getRandomInt(5, 10)
  const start = getRandomInt(1, 50)
  const step = getRandomInt(1, 10)

  const progression = buildProgression(start, step, length)
  const hiddenIndex = getRandomInt(0, length - 1)

  const answer = String(progression[hiddenIndex])
  const question = progression
    .map((n, idx) => (idx === hiddenIndex ? '..' : String(n)))
    .join(' ')
  return { question, answer }
}

export default () => runGame(RULES, makeRound)
