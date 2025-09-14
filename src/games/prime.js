import runGame from '../index.js'
import { rand, isPrime } from '../utils.js'

const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const makeRound = () => {
  const number = rand(2, 200)
  const question = String(number)
  const answer = isPrime(number) ? 'yes' : 'no'
  return { question, answer }
}

export default function runPrimeGame() {
  runGame(DESCRIPTION, makeRound)
}
