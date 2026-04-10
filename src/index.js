import readlineSync from 'readline-sync'
import whatIsYourName from './cli.js'

const roundCount = 3

const runBrainGames = (description, generateGameData) => {
    const name = whatIsYourName()
    console.log(description)

    for (let i = 0; i < roundCount; i += 1) {
        const [question, correctAnswer] = generateGameData()

        console.log(`Question: ${question}`)
        const userAnswer = readlineSync.question('Your answer: ')

        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(.\nCorrect answer was '${correctAnswer}'.`)
            console.log(`Let's try again, ${name}!`)
            return
        }

        console.log('Correct!')
    }
    console.log(`Congratulations, ${name}!`)
}

export default runBrainGames
