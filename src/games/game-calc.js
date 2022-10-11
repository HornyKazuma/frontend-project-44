import getRandomNum from '../helpers/getRandomNum.js';
import gameCore from '../index.js';

const operators = ['+', '-', '*'];
const task = 'What is the result of the expression?';

const calculate = (firstNum, secondNum, operator) => {
  switch (operator) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      throw new Error('this operator not found');
  }
};

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getArrWithAnswerQuestion = () => { //
  const randomOperator = operators[getRandom(0, 2)];
  const firstOperand = getRandomNum();
  const secondOperand = getRandomNum();
  const question = `${firstOperand} ${randomOperator} ${secondOperand}`; // сгенерированный вопрос
  const correctAnswer = calculate(firstOperand, secondOperand, randomOperator);
  return [question, correctAnswer.toString()];
};

export default () => {
  gameCore(task, getArrWithAnswerQuestion);
};
