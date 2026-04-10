import runBrainGames from '../index.js';

const isEven = (number) => number % 2 === 0;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateGameData = () => {
    const question = Math.floor(Math.random() * 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return [question, correctAnswer.toLowerCase()];
};
const runEvenGame = () => {
    runBrainGames(description, generateGameData);
};

export default runEvenGame;