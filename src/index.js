import readlineSync from 'readline-sync'
import askName from './cli.js'

const ROUNDS_TO_WIN = 3

export default function runGame(rules, getRoundData) {
  const name = askName()
  console.log(rules)

  for (let i = 0; i < ROUNDS_TO_WIN; i += 1) {
    const { question, answer: correctAnswer } = getRoundData()

    console.log(`Question: ${question}`)
    const answer = readlineSync.question('Your answer: ').trim()

    if (answer === String(correctAnswer)) {
      console.log('Correct!')
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}
