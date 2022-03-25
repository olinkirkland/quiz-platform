import QuizModel from '../models/QuizModel';
import * as mock from './mock.json';

export default class QuizController {
  static instance = null;

  constructor() {
    if (!QuizController.instance) {
      QuizController.instance = this;
    }

    return QuizController.instance;
  }

  fetchNewQuiz(topic, questionCount, callback) {
    // Gets a quiz
    let quiz = QuizModel.fromUntyped(mock);
    setTimeout(callback(quiz), 500);
  }
}
