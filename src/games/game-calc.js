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

const getArrWithAnswerQuestion = () => { //
  const randomOperator = operators[getRandomNum(0, 2)];
  const firstOperand = getRandomNum(1, 50);
  const secondOperand = getRandomNum(1, 50);
  const question = `${firstOperand} ${randomOperator} ${secondOperand}`; // сгенерированный вопрос
  const correctAnswer = calculate(firstOperand, secondOperand, randomOperator);
  return [question, correctAnswer.toString()];
};

export default () => {
  gameCore(task, getArrWithAnswerQuestion);
};
