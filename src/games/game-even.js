import getRandomNum from '../helpers/getRandomNum.js';
import gameCore from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getArrWithAnswerQuestion = () => {
  const randomNum = getRandomNum(1, 10);
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return [randomNum, correctAnswer];
};

export default () => {
  gameCore(task, getArrWithAnswerQuestion);
};
