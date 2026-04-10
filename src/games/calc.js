import runBrainGames from '../index.js';

const operators = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const generateGameData = () => {
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    const operator = operators[Math.floor(Math.random() * operators.length)];


    const calculator = (number1, number2, operator) => {
        switch (operator) {
            case '+':
                return number1 + number2;
            case '-':
                return number1 - number2;
            case '*':
                return number1 * number2;
            default:
                return null;
        };
    };
    const question = `${number1} ${operator} ${number2}`;
    const correctAnswer = calculator(number1, number2, operator).toString();
    return [question, correctAnswer];
};

const runCalcGame = () => {
    runBrainGames(description, generateGameData);
};

export default runCalcGame;