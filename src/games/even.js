// src/games/even.js
import readlineSync from 'readline-sync';
import askName from '../cli.js';

// Предикат: чётное ли число
const isEven = (n) => n % 2 === 0;

export default function startEvenGame() {
  const name = askName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const roundsToWin = 3;
  let correctAnswerCount = 0;

  while (correctAnswerCount < roundsToWin) {
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${number}`);

    const answer = readlineSync.question('Your answer: ').trim().toLowerCase();
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (answer === correctAnswer) {
      console.log('Correct!');
      correctAnswerCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return; // <-- теперь return внутри функции, всё корректно
    }
  }

  console.log(`Congratulations, ${name}!`);
}

