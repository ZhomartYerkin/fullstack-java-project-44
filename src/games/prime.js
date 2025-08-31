import runGame from '../index.js'
import { rand } from '../utils.js'

const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (n) => {
  if (n <= 1) return false
  if (n % 2 === 0) return n === 2
  const limit = Math.floor(Math.sqrt(n))
  for (let d = 3; d <= limit; d += 2) {
    if (n % d === 0) return false
  }
  return true
}

const makeRound = () => {
  const number = rand(2, 200)
  const question = String(number)
  const answer = isPrime(number) ? 'yes' : 'no'
  return { question, answer }
}

export default function runPrimeGame() {
  runGame(DESCRIPTION, makeRound)
}
